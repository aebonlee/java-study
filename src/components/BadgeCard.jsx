import { useBadge } from '../contexts/BadgeContext'

export default function BadgeCard({ badge }) {
  const { earnedBadges } = useBadge()
  const isEarned = earnedBadges.includes(badge.id)

  return (
    <div className={`badge-card ${isEarned ? 'earned' : 'locked'}`}>
      <div className="badge-icon">{badge.icon}</div>
      <h4>{badge.title}</h4>
      <p>{badge.description}</p>
      <span className={`badge-tier tier-${badge.tier}`}>{badge.tier}</span>
    </div>
  )
}
