package com.unzulua.board

import grails.trello.domain.Card
import grails.trello.TrelloApiService
import groovy.time.TimeCategory
import com.unzulua.board.domain.Task

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
