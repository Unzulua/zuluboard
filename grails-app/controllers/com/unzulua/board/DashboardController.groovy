package com.unzulua.board

import com.unzulua.board.domain.Task
import com.unzulua.board.presenters.ActionPresenter
import org.springframework.web.servlet.support.RequestContextUtils

class DashboardController {

    TaskService taskService
    ActionService actionService

    def index() {
        def locale = RequestContextUtils.getLocale(request)
        List<ActionPresenter> activities = actionService.lastActions().collect { ActionPresenter.from(it, locale) }
        List<Task> tasks =  taskService.nextTasks()


        respond([activities: activities, tasks: tasks])
    }
}
