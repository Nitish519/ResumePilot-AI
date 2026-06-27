import api from "./api";

export const getResumeHistory = async () => {

    const response = await api.get(
        "/resume/history"
    );

    return response.data;

};

export const getResumeById = async (id) => {

    const response = await api.get(
        `/resume/${id}`
    );

    return response.data;

};

export const deleteResume = async (id) => {

    const response = await api.delete(
        `/resume/${id}`
    );

    return response.data;

};