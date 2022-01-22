<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function store(Request $request)
    {
        try {
            $task = new Task();
            $task->title = $request->input('title');
            $task->description = $request->input('description');
            $task->progress = $request->input('progress');
            $task->reward = $request->input('reward');
            $task->user_id = $request->input('user_id');
            $task->parent = $request->input('parent');

            if ($task->save()) {
                return response()->json(['status' => 'success', 'message' => 'Task successfully created.']);
            }

        } catch (\Exception $e) {
            $error_msg = "An error occurred, please check the correctness of the input data.";
            // TODO log exception message
            if (env('APP_DEBUG') === true) {
                $error_msg = 'TaskController::store | ' . $e->getMessage();
            }

            return response()->json(['status' => 'error', 'message' => $error_msg]);
        }
    }


}
