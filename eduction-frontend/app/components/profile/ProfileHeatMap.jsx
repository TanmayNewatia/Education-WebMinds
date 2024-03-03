import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export default function ProfileHeatMap() {
    return (
        <CalendarHeatmap
            startDate={new Date('2023-12-31')}
            endDate={new Date('2024-12-31')}
            values={[
                { date: '2024-01-02', count: 12 },
                { date: '2024-01-22', count: 122 },
                { date: '2024-01-30', count: 38 },
            ]}
        />
    )
}