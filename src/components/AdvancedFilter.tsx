import React, { useState } from 'react'

type FilterOptions = {
  category: string
  sortBy: 'name' | 'rating'
}

type Props = {
  onFilterChange: (filters: FilterOptions) => void
  categories: string[]
}

const AdvancedFilter: React.FC<Props> = ({ onFilterChange, categories }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    sortBy: 'name'
  })

  const handleCategoryChange = (category: string) => {
    setFilters({ ...filters, category })
    onFilterChange({ ...filters, category })
  }

  const handleSortChange = (sortBy: FilterOptions['sortBy']) => {
    setFilters({ ...filters, sortBy })
    onFilterChange({ ...filters, sortBy })
  }

  const clearFilters = () => {
    const defaultFilters: FilterOptions = {
      category: '',
      sortBy: 'name'
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  return (
    <div className="advanced-filter">
      <div className="filter-grid">
        <div className="filter-item">
          <label>Kategori</label>
          <select
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="filter-select"
          >
            <option value="">Tümü</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label>Sıralama</label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleSortChange(e.target.value as FilterOptions['sortBy'])}
            className="filter-select"
          >
            <option value="name">İsim</option>
            <option value="rating">Değerlendirme</option>
          </select>
        </div>

        <div className="filter-item">
          <button onClick={clearFilters} className="btn btn-secondary btn-small">Temizle</button>
        </div>
      </div>
    </div>
  )
}

export default AdvancedFilter
