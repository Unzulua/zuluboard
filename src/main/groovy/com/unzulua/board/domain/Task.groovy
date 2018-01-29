package com.unzulua.board.domain

import grails.trello.domain.Card
import grails.trello.domain.BoardList
import grails.util.Holders

class Task {
    String description
    Date dueDate
    String formattedDate
    String cardId
    String projectName
    String idList
    java.util.List<String> labels

    static Task from(Card card) {
        Task task = new Task(cardId: card.id, dueDate: card.dueDate, idList: card.idList, labels: card.labels)
        task.formattedDate = formatDate(card.dueDate)
        task.description = card.name
        task.projectName = ""
        if (card.description){
            task.description += " - ${card.description}"
        }
        task
    }

    private static formatDate(Date date){
        date.format(defaultDateFormat)
    }

    void setProject(BoardList list){
      this.projectName = list.name
    }

    private static String getDefaultDateFormat(){
        Holders.grailsApplication.config.date.format.default
    }
}
