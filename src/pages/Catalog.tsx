import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "react-router"
import { WORKS } from "../data"
import { WorkCard, WorkModal } from "../components/WorkCard"
import type { Work, Category } from "../data"

type StyleTag = "pixel" | "display" | "serif" | "techno" | "retro" | "all"

const STYLE_FILTERS: { value: StyleTag; label: string }[] = [
  { value: "all", label: "全部风格" },
  { value: "pixel", label: "像素" },
  { value: "display", label: "展示" },
  { value: "serif", label: "衬线" },
  { value: "techno", label: "科技" },
  { value: "retro", label: "复古" },
]

const STYLE_MAP: Record<number, StyleTag> = {
  1: "techno", 2: "serif", 3: "display", 4: "techno",
  5: "retro", 6: "serif", 7: "display", 8: "serif",
  9: "pixel", 10: "display", 11: "techno", 12: "techno",
  13: "techno", 14: "display", 15: "serif", 16: "display",
  17: "display", 18: "display", 19: "retro", 20: "serif",
}

export default function Catalog() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("q") ?? "")
  const [cat, setCat] = useState<Category | "all">((searchParams.get("cat") as Category) ?? "all")
  const [style, setStyle] = useState<StyleTag>("all")
  const [selected, setSelected] = useState<Work | null>(null)

  useEffect(() => {
    const q = searchParams.get("q")
    const c = searchParams.get("cat") as Category | null
    if (q) setSearch(q)
    if (c) setCat(c)
  }, [searchParams])

  const filtered = useMemo(() => {
    return WORKS.filter((w) => {
      const q = search.toLowerCase()
      const matchSearch = !q ||
        w.title.includes(q) ||
        w.titleEn.toLowerCase().includes(q) ||
        w.genres.some((g) => g.includes(q)) ||
        w.developer.toLowerCase().includes(q) ||
        w.fonts.some((f) => f.name.toLowerCase().includes(q) || f.role.includes(q))
      const matchCat = cat === "all" || w.category === cat
      const matchStyle = style === "all" || STYLE_MAP[w.id] === style
      return matchSearch && matchCat && matchStyle
    })
  }, [search, cat, style])

  const pillBase: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "5px 12px",
    borderRadius: "2px",
    border: "1px solid #222222",
    cursor: "pointer",
    transition: "background 0.1s, border-color 0.1s, color 0.1s",
    background: "transparent",
  }
  const active: React.CSSProperties = { background: "#336BF4", border: "1px solid #336BF4", color: "#000000" }
  const inactive: React.CSSProperties = { color: "#7a7a8c" }

  return (
    <div>
      {/* Page header */}
      <section style={{
        padding: "clamp(36px, 6vw, 72px) clamp(16px, 4vw, 64px) clamp(24px, 4vw, 40px)",
        borderBottom: "1px solid #222222",
      }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "#336BF4",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          marginBottom: "12px",
        }}>
          字体档案目录
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 5vw, 56px)",
          fontWeight: 700,
          color: "#f0ede6",
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          margin: "0 0 12px",
          fontStyle: "italic",
        }}>
          {cat === "game" ? "电子游戏" : cat === "film" ? "影视动漫" : "全部作品"}
        </h1>
        <p style={{
          fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
          fontSize: "14px",
          color: "#7a7a8c",
          margin: 0,
          lineHeight: 1.6,
        }}>
          {cat === "game"
            ? "从街机游戏到3A大作，记录每个时代的游戏字体美学。"
            : cat === "film"
            ? "动画、电影、剧集中的字体选择与排版艺术档案。"
            : "收录游戏与影视动漫作品的完整字体使用档案。"}
        </p>
      </section>

      {/* Filters */}
      <section style={{
        padding: "16px clamp(16px, 4vw, 64px)",
        borderBottom: "1px solid #222222",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        alignItems: "center",
      }}>
        {/* Search */}
        <div style={{ position: "relative", flex: "1 1 180px", maxWidth: "300px" }}>
          <span style={{
            position: "absolute", left: "10px", top: "50%",
            transform: "translateY(-50%)", color: "#7a7a8c", fontSize: "14px", pointerEvents: "none",
          }}>⌕</span>
          <input
            type="text"
            placeholder="搜索作品、字体、标签…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              background: "#0d0d0d",
              border: "1px solid #222222",
              borderRadius: "2px",
              padding: "7px 12px 7px 30px",
              color: "#f0ede6",
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "13px",
              outline: "none",
            }}
          />
        </div>

        {/* Category */}
        <div style={{ display: "flex", gap: "6px" }}>
          {(["all", "game", "film"] as const).map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{ ...pillBase, ...(cat === c ? active : inactive) }}>
              {c === "all" ? "全部" : c === "game" ? "游戏" : "影视"}
            </button>
          ))}
        </div>

        {/* Style */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {STYLE_FILTERS.map((s) => (
            <button key={s.value} onClick={() => setStyle(s.value)} style={{ ...pillBase, ...(style === s.value ? active : inactive) }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#7a7a8c", marginLeft: "auto" }}>
          {filtered.length} / {WORKS.length}
        </span>
      </section>

      {/* Grid */}
      <main style={{ padding: "clamp(20px, 3vw, 40px) clamp(16px, 4vw, 64px)" }}>
        {filtered.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "100px 0",
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            color: "#222222",
            fontStyle: "italic",
          }}>
            没有找到匹配的作品
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "10px",
          }}>
            {filtered.map((work) => (
              <WorkCard key={work.id} work={work} onClick={() => setSelected(work)} />
            ))}
          </div>
        )}
      </main>

      {selected && <WorkModal work={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
