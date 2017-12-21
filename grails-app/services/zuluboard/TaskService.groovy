package zuluboard

import com.foozulu.domain.Card
import com.zulu.trello.TrelloApiService
import groovy.time.TimeCategory
import zuluboard.domain.Task

class TaskService {

    TrelloApiService trelloApiService

    List<Task> nextTasks(Integer days = null) {
        days = days ?: 30
        Date from = new Date().clearTime()
        Date to = from
        use(TimeCategory){
            to += days.days
        }
        trelloApiService.findAllCardsByDueDate(from, to).collect{ Card card ->
            Task.from(card)
        }

    }
}
