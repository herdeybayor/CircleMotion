import React from "react";
import "./App.css";
import CircleDisplay from "./CircleDisplay";

const colorDatasets = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#A1FF33",
    "#FF8C33",
    "#33A1FF",
    "#8C33FF",
    "#FFC300",
    "#DAF7A6",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#2ECC71",
    "#3498DB",
    "#9B59B6",
    "#34495E",
    "#16A085",
    "#27AE60",
    "#2980B9",
    "#8E44AD",
    "#2C3E50",
    "#F39C12",
    "#E74C3C",
    "#ECF0F1",
    "#95A5A6",
    "#7F8C8D",
    "#D35400",
    "#1ABC9C",
    "#2ECC71",
    "#3498DB",
    "#9B59B6",
    "#34495E",
    "#16A085",
    "#27AE60",
    "#2980B9",
    "#8E44AD",
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#A1FF33",
    "#FF8C33",
    "#33A1FF",
    "#8C33FF",
    "#FFC300",
    "#DAF7A6",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#2ECC71",
    "#3498DB",
    "#9B59B6",
    "#34495E",
    "#16A085",
    "#27AE60",
    "#2980B9",
    "#8E44AD",
    "#2C3E50",
    "#F39C12",
    "#E74C3C",
    "#ECF0F1",
    "#95A5A6",
    "#7F8C8D",
    "#D35400",
    "#1ABC9C",
    "#2ECC71",
    "#3498DB",
    "#9B59B6",
    "#34495E",
    "#16A085",
    "#27AE60",
    "#2980B9",
    "#8E44AD",
];
const App = () => {
    const [colors, setColors] = React.useState<string[]>([]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * colorDatasets.length);
            setColors((prev) => [colorDatasets[randomIndex], ...prev]);
        }, 100);

        return () => clearInterval(interval);
    }, [colors]);

    return <CircleDisplay circle_item_spacing={2.5} circle_spacing={40} circle_radius={40} dataset={colors.slice(0, 200)} />;
};

export default App;
