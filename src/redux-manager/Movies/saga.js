import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_MOVIE, SEARCH_MOVIE, DELETE_MOVIE } from "../constants";
import { searchMovieAction } from "./actions";
import { fetchCartMoviess } from "../REST";

function* workerCart(action) {
  try {
    const data = yield call(fetchCartMoviess, action.payload);
    yield put(searchMovieAction(data.Search));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(GET_MOVIE, workerCart);
}
