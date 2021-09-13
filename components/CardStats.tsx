interface CardStatsProps {
    starCount?: number;
    openIssues?: number;
    forks?: number;
};

const CardStats: React.FC<CardStatsProps> = ({
    starCount, openIssues, forks
}) => {
    return (
        <div className="p-5 h-screen grid grid-rows-3 sm:grid-rows-1 grid-flow-col md:grid-rows-6 gap-4">
            <ul>
                <li>{starCount}</li>
                <li>{openIssues}</li>
                <li>{forks}</li>
            </ul>
        </div>
    );
}

export default CardStats;