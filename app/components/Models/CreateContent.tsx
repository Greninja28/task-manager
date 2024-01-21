"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "../Button/Button";
import { plus } from "@/app/utils/Icons";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const { theme, allTasks, closeModal } = useGlobalState();

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const task = { title, description, date, completed, important };

    try {
      const res = await axios.post("/api/tasks", task);

      if (res.data.error) {
        toast.error(res.data.error);
      }
      if (!res.data.error) {
        toast.success("Task created successfully");
        allTasks();
        closeModal();
      }
    } catch (error) {
      toast.error("Something went wrong in creating");
      console.log(error);
    }
  };

  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
      <h1>Create a Task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="e.g: Watch a video from Fireship."
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          name="description"
          rows={3}
          onChange={handleChange("description")}
          placeholder="e.g: Watch a video about Next.js Auth."
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          name="date"
          onChange={handleChange("date")}
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="completed">Toggle Completed</label>
        <input
          type="checkbox"
          id="completed"
          value={completed.toString()}
          name="completed"
          onChange={handleChange("completed")}
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="important">Toggle Important</label>
        <input
          type="checkbox"
          id="important"
          value={important.toString()}
          name="important"
          onChange={handleChange("important")}
        />
      </div>

      <div className="submit-btn flex justify-end">
        <Button
          type="submit"
          icon={plus}
          name="Create Task"
          padding="0.7rem 1.5rem"
          borderRad="0.8rem"
          fw="500"
          fs="1rem"
          background={theme.colorGreenDark}
          color={theme.colorGrey1}
        />
      </div>
    </CreateContentStyled>
  );
};

const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1rem, 5vw, 1.3rem);
    font-weight: 600;
  }

  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 0.5rem 0;
    font-weight: 500;

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }
  }

  .submit-btn button {
    transition: all 0.35s ease-in-out;
    i {
      color: ${(props) => props.theme.colorGrey0};
    }
    &:hover {
      background: ${(props) => props.theme.colorPrimary} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer !important;
    margin: 0.8rem 0;
    label {
      flex: 1;
    }

    input {
      width: 1.3rem;
    }
  }
`;

export default CreateContent;
