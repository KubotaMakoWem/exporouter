/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SaveTask } from '../models/SaveTask';
import type { Task } from '../models/Task';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TaskListService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * タスクリスト取得
     * 全タスクのリストを絞り込みなしで取得します。
     * @returns Task タスクリストを正常に取得しました。
     * @throws ApiError
     */
    public listupTask(): CancelablePromise<Array<Task>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/task',
        });
    }
    /**
     * タスク登録
     * タスクを登録し登録後のタスクを取得します。
     * @param requestBody SaveTask
     * @returns Task タスクを正常に登録しました。
     * @throws ApiError
     */
    public createTask(
        requestBody?: SaveTask,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/task',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * タスク取得
     * タスクを取得します。
     * @param id
     * @returns Task タスクを正常に取得しました。
     * @throws ApiError
     */
    public getTask(
        id: number,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/task/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `取得対象のタスクが存在しません。`,
            },
        });
    }
    /**
     * タスク更新
     * タスクを更新し更新後のタスクを取得します。
     * @param id
     * @param requestBody SaveTask
     * @returns Task タスクを正常に更新しました。
     * @throws ApiError
     */
    public updateTask(
        id: number,
        requestBody?: SaveTask,
    ): CancelablePromise<Array<Task>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/task/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `更新対象のタスクが存在しません。`,
            },
        });
    }
    /**
     * タスク削除
     * タスクを削除します。
     * @param id
     * @returns Task タスクを正常に削除しました。
     * @throws ApiError
     */
    public deleteTask(
        id: number,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/task/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `削除対象のタスクが存在しません。`,
            },
        });
    }
}
