package com.unzulua.board

import grails.trello.domain.Action
import com.unzulua.board.domain.Task

class DashboardController {

    TaskService taskService
    ActionService actionService

    def index() {
        List<Action> activities =  actionService.lastActions()
        List<Task> tasks =  taskService.nextTasks()

        respond([activities: activities, tasks: tasks])
    }
}
