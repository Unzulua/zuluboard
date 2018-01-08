package com.unzulua.board.domain

import grails.trello.domain.Card
import grails.trello.domain.List

class Task {
    String description
    Date dueDate
    String cardId
    String projectName
    String idList

    static Task from(Card card) {
        Task task = new Task(cardId: card.id, dueDate: card.dueDate, idList: card.idList)
        task.description = card.name
        task.projectName = ""
        if (card.description){
            task.description += " - ${card.description}"
        }
        task
    }

    void setProject(List list){
      this.projectName = list.name
    }
}
