import axios from 'axios';

import {
  ADD_CONTENT,
  ADD_SOURCE,
  TOGGLE_SOURCE,
} from "./actionTypes";

import formQuery from '../helpers/formQuery';

export const addContent = content => ({
  type: ADD_CONTENT,
  payload: { content }
});

export const addSource = sourceList => ({
  type: ADD_SOURCE,
  payload: { sourceList }
});

export const toggleSource = source => ({
  type: TOGGLE_SOURCE,
  payload: { source }
});

export const fetchContent = () => {
  return async function (dispatch, getState) {
    const { source } = getState();

    const { data: content } = await axios.get(formQuery(source));

    dispatch(addContent(content))
    return content;
  }
};

export const fetchSource = () => {
  return async function (dispatch) {
    const { data: sourceList } = await axios.get('https://rss-collector-back.herokuapp.com/get-sources');
    dispatch(addSource(sourceList))
    return sourceList;
  }
};