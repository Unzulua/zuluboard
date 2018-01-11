package com.unzulua.board.presenters

import grails.trello.domain.Action
import grails.trello.domain.ActionType
import grails.util.Holders
import java.util.Locale

class ActionPresenter {
    String formattedDate
    String formattedType

    private java.util.Locale locale
    private @Delegate Action action

    static ActionPresenter from(Action action, Locale locale) {
        def date = formatDate(action.date)
        def type = typeMessage(action.type, locale)

        new ActionPresenter(action: action, formattedType: type, locale: locale, formattedDate: date)
    }

    private static formatDate(Date date){
        date.format('dd-MM-yyyy hh:mm')
    }

    private static typeMessage(ActionType type, Locale locale){
        Holders.applicationContext.messageSource.getMessage('activity.type.'+type, [] as Object[], '', locale)
    }
}
