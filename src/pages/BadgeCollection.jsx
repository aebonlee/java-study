import { useBadge } from '../contexts/BadgeContext'
import { badges } from '../data/badges'
import BadgeCard from '../components/BadgeCard'

export default function BadgeCollection() {
  const { earnedBadges } = useBadge()

  const tiers = ['platinum', 'gold', 'silver', 'bronze']
  const tierNames = {
    platinum: { icon: 'fas fa-gem', label: '플래티넘', color: '#a78bfa' },
    gold: { icon: 'fas fa-award', label: '골드', color: '#f59e0b' },
    silver: { icon: 'fas fa-award', label: '실버', color: '#9ca3af' },
    bronze: { icon: 'fas fa-award', label: '브론즈', color: '#cd7f32' }
  }

  const earned = badges.filter(b => earnedBadges.includes(b.id))
  const locked = badges.filter(b => !earnedBadges.includes(b.id))

  return (
    <div className="badge-page">
      <section className="page-header badge-header">
        <div className="container">
          <div className="page-header-title-row">
            <span className="page-header-icon"><i className="fas fa-trophy"></i></span>
            <div>
              <h1>도장깨기</h1>
              <p>학습 목표를 달성하고 배지를 수집하세요!</p>
            </div>
          </div>
          <div className="badge-overview-stats">
            <div className="badge-stat">
              <span className="badge-stat-num">{earned.length}</span>
              <span className="badge-stat-label">획득</span>
            </div>
            <div className="badge-stat">
              <span className="badge-stat-num">{badges.length}</span>
              <span className="badge-stat-label">전체</span>
            </div>
            <div className="badge-stat">
              <span className="badge-stat-num">{badges.length > 0 ? Math.round((earned.length / badges.length) * 100) : 0}%</span>
              <span className="badge-stat-label">달성률</span>
            </div>
          </div>
        </div>
      </section>

      <section className="badge-collection-section">
        <div className="container">
          {earned.length > 0 && (
            <div className="badge-group">
              <h2 className="badge-group-title">
                <i className="fas fa-wand-magic-sparkles"></i> 획득한 배지 ({earned.length})
              </h2>
              <div className="badge-grid">
                {earned.map(badge => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </div>
          )}

          {tiers.map(tier => {
            const tierBadges = locked.filter(b => b.tier === tier)
            if (tierBadges.length === 0) return null
            const tierInfo = tierNames[tier]
            return (
              <div key={tier} className="badge-group">
                <h2 className="badge-group-title">
                  <i className={tierInfo.icon} style={{ color: tierInfo.color }}></i>
                  {' '}{tierInfo.label} 등급 ({tierBadges.length}개 남음)
                </h2>
                <div className="badge-grid">
                  {tierBadges.map(badge => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
