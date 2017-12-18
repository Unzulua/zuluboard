package zuluboard

import com.foozulu.domain.Board
import com.foozulu.domain.TaskList

class DashboardController {

    def index() {
        Set<TaskList> lists = [
            new TaskList(name: 'primera'),
            new TaskList(name: 'segunda')
        ]
        respond([board: new Board(name: 'My board', lists: lists)])
    }
}
