import type {CreateTicketCommand} from "~/models/ticket/createTicketCommand";
import type {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import type {TicketDto, TicketFilterParams, TicketFilterResult} from "~/models/ticket/ticketDto";
import type {SendTicketMessageCommand} from "~/models/ticket/sendTicketMessageCommand";

export function CreateTicket(command:CreateTicketCommand):Promise<ApiResponse<number>>{
    // @ts-ignore
    return FetchApi('/Ticket',{
        method:'POST',
        body:command,
    })
}
export function SendTicketMessage(command:SendTicketMessageCommand):Promise<ApiResponse<undefined>>{
    // @ts-ignore
    return FetchApi(`/Ticket/${command.ticketId}`,{
        method:'POST',
        body:command
    })
}
export function GetTicket(id:number):Promise<ApiResponse<TicketDto>>{
    // @ts-ignore
    return FetchApi(`/Ticket/${id}`,{
        method:'GET',
    })
}
export function GetTickets(filterParams:TicketFilterParams):Promise<ApiResponse<TicketFilterResult>>{
    // @ts-ignore
    return FetchApi('/Ticket',{
        method:'GET',
        params:filterParams
    })
}
export function GetUserTickets(filterParams:TicketFilterParams):Promise<ApiResponse<TicketFilterResult>>{
    // @ts-ignore
    return FetchApi('/Ticket/user',{
        method:'GET',
        params:filterParams
    })
}
export function CloseTickets(ticketId:number):Promise<ApiResponse<undefined>>{
    // @ts-ignore
    return FetchApi(`/Ticket/close/${ticketId}`,{
        method:'PUT',
    })
}