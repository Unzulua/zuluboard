package com.unzulua.board

import grails.trello.domain.Card
import grails.trello.TrelloApiService
import grails.testing.services.ServiceUnitTest
import groovy.time.TimeCategory
import spock.lang.Specification
import spock.lang.Unroll
import com.unzulua.board.domain.Task

class TaskServiceSpec extends Specification implements ServiceUnitTest<TaskService>{

    @Unroll("nextTask asks for cards in #days days time or 30 days in case of null")
    void "nextTask asks for cards in days received time"() {
        given: "next month date"
        Date today = new Date()
        today.clearTime()
        Date nextMonth
        use(TimeCategory){
            nextMonth = today + (days?:30).days
        }

        when:
        service.nextTasks(days)

        then: "should call once to trello service"
        1 * trelloApiService.findAllCardsByDueDate(today, nextMonth)

        where:
        days << [null, 10, 50]
    }

    void "nextTask transform a card into a task"() {
        given: "one card"
        Card card = new Card(id: 'card1', name: 'the name', description: 'the description', dueDate: new Date())
        trelloApiService.findAllCardsByDueDate(_, _) >> [ card ]

        when:
        Task task = service.nextTasks()[0]

        then:
        task.cardId == card.id
        task.description == "${card.name} - ${card.description}"
        task.dueDate == card.dueDate
    }

    TrelloApiService trelloApiService = Mock()

    def setup() {
        service.trelloApiService = trelloApiService
    }
}
