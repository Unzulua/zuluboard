package com.unzulua.board

import grails.trello.TrelloApiService
import grails.trello.domain.Action

class ActionService {

    TrelloApiService trelloApiService
    static Integer actionsToShow = 10

    List<Action> lastActions() {
        trelloApiService.retrieveActions(actionsToShow)
    }
}
