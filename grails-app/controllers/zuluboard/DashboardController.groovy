package zuluboard

import com.foozulu.domain.Action
import zuluboard.domain.Task

class DashboardController {

    TaskService taskService
    ActionService actionService

    def index() {
        List<Action> activities =  actionService.lastActions()
        List<Task> tasks =  taskService.nextTasks()

        respond([activities: activities, tasks: tasks])
    }
}
