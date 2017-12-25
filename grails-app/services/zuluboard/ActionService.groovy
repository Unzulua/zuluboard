package zuluboard

import com.zulu.trello.TrelloApiService
import com.foozulu.domain.Action

class ActionService {

    TrelloApiService trelloApiService
    static Integer actionsToShow = 1

    List<Action> lastActions() {
        trelloApiService.retrieveActions(actionsToShow)
    }
}
