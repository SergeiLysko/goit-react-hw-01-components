import { Container } from "components/index.styled";
import { StatisticsTitle, StatisticsItem, StatisticsList } from "./Statistics.styled";
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    return (<Container>
        <section>
            {title && (
            <StatisticsTitle>{title}</StatisticsTitle>
            )}

            <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
                    return <StatisticsItem key={id}>
                        <span>{ label}</span>
                        <span>{percentage }%</span>
                </StatisticsItem>
                })}
            </StatisticsList>
        </section>
        </Container>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}