import React from 'react'

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-rating"></div>
          <div className="skeleton-price"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
