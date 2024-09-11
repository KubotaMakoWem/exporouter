/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * idを除くタスクの情報をもつリクエスト
 */
export type SaveTask = {
    /**
     * タスク名
     */
    title: string;
    /**
     * タスク完了期限
     */
    limit: string;
    /**
     * タスク完了フラグ
     */
    done: boolean;
};

