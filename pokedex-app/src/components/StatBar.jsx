import { capitalize } from '../utils/pokemon';

const statLabels = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
};

export default function StatBar({ statName, value }) {
  const label = statLabels[statName] || capitalize(statName);
  const percentage = Math.min((value / 255) * 100, 100);

  return (
    <div className="stat-row">
      <div className="stat-row__header">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className="stat-bar" aria-hidden="true">
        <div className="stat-bar__fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
