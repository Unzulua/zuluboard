package com.unzulua.board.domain

import grails.trello.domain.Card
import grails.trello.domain.BoardList

class Task {
    String description
    Date dueDate
    String cardId
    String projectName
    String idList
    java.util.List<String> labels

    static Task from(Card card) {
        Task task = new Task(cardId: card.id, dueDate: card.dueDate, idList: card.idList, labels: card.labels)
        task.description = card.name
        task.projectName = ""
        if (card.description){
            task.description += " - ${card.description}"
        }
        task
    }

    void setProject(BoardList list){
      this.projectName = list.name
    }
}
