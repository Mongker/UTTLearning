/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: FBU ( đại học tài chính ngân hàng hà nội)
 */

import { all } from 'redux-saga/effects';
import { watcherGetCategory, watcherPostCategory, watcherDeleteCategory, watcherPutCategory } from 'redux/sagas/categorySagas';
import { watcherGetListUser } from './userSagas';
// watch saga
// saga
export default function* rootSaga() {
    yield all([watcherGetCategory(), watcherPostCategory(), watcherDeleteCategory(), watcherPutCategory(), watcherGetListUser()]);
}
