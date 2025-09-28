import { OrderStatus } from "./enum"

export const OrderStatusLabels: Record<OrderStatus, string> = {
    [OrderStatus.All]: "All",
    [OrderStatus.Pending]: "Pending",
    [OrderStatus.AwaitingDeposit]: "Awaiting Deposit",
    [OrderStatus.Confirmed]: "Confirmed",
    [OrderStatus.InUse]: "In Use",
    [OrderStatus.Returned]: "Returned",
    [OrderStatus.Overdue]: "Overdue",
    [OrderStatus.Completed]: "Completed",
    [OrderStatus.Cancelled]: "Cancelled"
}
