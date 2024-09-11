/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * タスクのタイトル、完了期限、完了フラグを持つオブジェクト
 */
export type Task = {
    /**
     * id
     */
    id: number;
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

