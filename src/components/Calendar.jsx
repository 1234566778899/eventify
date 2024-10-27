import React, { useState } from 'react';
import '../styles/Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    // Obtener el mes y el año actuales
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Cambia el mes al siguiente o anterior
    const changeMonth = (offset) => {
        const newDate = new Date(currentYear, currentMonth + offset, 1);
        setCurrentDate(newDate);
    };

    // Maneja la selección de un día
    const selectDay = (day) => {
        setSelectedDate(new Date(currentYear, currentMonth, day));
    };

    // Genera una matriz de días del mes actual
    const getDaysInMonth = () => {
        const days = [];
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Agregar espacios vacíos para los días previos al inicio del mes
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(null);
        }

        // Agregar los días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}>&lt;</button>
                <span className="month-label">
                    {currentDate.toLocaleString('default', { month: 'long' })} {currentYear}
                </span>
                <button onClick={() => changeMonth(1)}>&gt;</button>
            </div>
            <div className="calendar-grid">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                    <div key={index} className="day-label">
                        {day}
                    </div>
                ))}
                {getDaysInMonth().map((day, index) => (
                    <div
                        key={index}
                        className={`day ${day ? '' : 'empty'} ${selectedDate && day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() ? 'selected' : ''}`}
                        onClick={() => day && selectDay(day)}
                    >
                        {day || ''}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
