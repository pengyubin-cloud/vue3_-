import dayjs from "dayjs"

export function formatMonthDay(date,DM="MM月DD日") {
    return dayjs(date).format(DM)
}

export function getDiffDays(startDate,endDate) {
    return dayjs(endDate).diff(startDate,"day")
}