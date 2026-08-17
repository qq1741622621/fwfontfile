import { useState } from "react"
import { Link } from "react-router"
import { WORKS } from "../data"
import { WorkCard, WorkModal } from "../components/WorkCard"
import type { Work } from "../data"

const FEATURED_IDS = [1, 11, 3, 12, 8, 16, 2, 15]
const featured = FEATURED_IDS.map((id) => WORKS.find((w) => w.id === id)!).filter(Boolean)

const gameCount = WORKS.filter((w) => w.category === "game").length
const filmCount = WORKS.filter((w) => w.category === "film").length
const fontCount = WORKS.reduce((n, w) => n + w.fonts.length, 0)

const STATS = [
  { value: WORKS.length.toString(), label: "部作品收录" },
  { value: gameCount.toString(), label: "电子游戏" },
  { value: filmCount.toString(), label: "影视动漫" },
  { value: fontCount.toString(), label: "款字体记录" },
]

const RECENT = WORKS.slice(-4).reverse()

export default function Home() {
  const [selected, setSelected] = useState<Work | null>(null)

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        padding: "clamp(64px, 11vw, 140px) clamp(16px, 4vw, 64px) clamp(48px, 7vw, 96px)",
        borderBottom: "1px solid #222222",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Large bg type */}
        <div aria-hidden style={{
          position: "absolute",
          top: "50%",
          right: "-1%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(80px, 18vw, 260px)",
          color: "rgba(51,107,244,0.04)",
          lineHeight: 0.9,
          userSelect: "none",
          pointerEvents: "none",
          fontStyle: "italic",
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}>
          字体
        </div>

        <div style={{ position: "relative", maxWidth: "680px" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#336BF4",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "24px",
          }}>
            字体档案 Vol. I — 游戏与影视字体研究
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 7vw, 88px)",
            fontWeight: 700,
            color: "#f0ede6",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: "0 0 28px",
          }}>
            塑造世界观的<br />
            <span style={{ fontStyle: "italic", color: "#336BF4" }}>字形</span>选择
          </h1>
          <p style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            lineHeight: 1.8,
            color: "#7a7a8c",
            maxWidth: "520px",
            margin: "0 0 40px",
          }}>
            收录游戏与影视动漫作品的字体使用档案。从任务提示到开场界面，
            从片头字幕到角色台词，探索视觉叙事中字形的力量。
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/catalog" style={{
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
              background: "#336BF4",
              border: "1px solid #336BF4",
              padding: "10px 24px",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}>
              浏览档案
            </Link>
            <Link to="/submit" style={{
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#a0a0b8",
              background: "transparent",
              border: "1px solid #222222",
              padding: "10px 24px",
              borderRadius: "2px",
              textDecoration: "none",
            }}>
              提交收录
            </Link>
          </div>
        </div>
      </section>

      {/* ── Image marquee banner ── */}
      <div style={{
        overflow: "hidden",
        borderBottom: "1px solid #222222",
        background: "#000000",
        position: "relative",
      }}>
        {/* fade edges */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(to right, #000000 0%, transparent 8%, transparent 92%, #000000 100%)",
        }} />
        <div style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 40s linear infinite",
          willChange: "transform",
        }}>
          {[...WORKS, ...WORKS].map((work, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: "160px",
                height: "220px",
                flexShrink: 0,
                overflow: "hidden",
                borderRight: "1px solid #222222",
              }}
            >
              <img
                src={work.image.replace("w=600&h=800", "w=320&h=440")}
                alt={work.imageAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* bottom label */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 10px 10px",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }}>
                <div style={{
                  fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#f0ede6",
                  lineHeight: 1.3,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {work.title}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  color: work.accentColor,
                  marginTop: "2px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}>
                  {work.category === "game" ? "游戏" : "影视"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <section style={{
        borderBottom: "1px solid #222222",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            padding: "28px clamp(16px, 3vw, 40px)",
            borderRight: i < 3 ? "1px solid #222222" : "none",
          }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#f0ede6",
              lineHeight: 1,
              marginBottom: "6px",
              fontStyle: "italic",
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#7a7a8c",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* ── Featured grid ── */}
      <section style={{ padding: "clamp(32px, 5vw, 64px) clamp(16px, 4vw, 64px)" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "24px",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#336BF4",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "6px",
            }}>
              精选收录
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 600,
              color: "#f0ede6",
              margin: 0,
              fontStyle: "italic",
            }}>
              编辑推荐
            </h2>
          </div>
          <Link to="/catalog" style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#7a7a8c",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            borderBottom: "1px solid #222222",
            paddingBottom: "2px",
          }}>
            查看全部 →
          </Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
        }}>
          {featured.map((work) => (
            <WorkCard key={work.id} work={work} onClick={() => setSelected(work)} />
          ))}
        </div>
      </section>

      {/* ── Category split ── */}
      <section style={{
        borderTop: "1px solid #222222",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}>
        {[
          { cat: "game" as const, label: "电子游戏", count: gameCount, desc: "从街机游戏到3A大作，记录每个时代的游戏字体美学。", href: "/catalog?cat=game", color: "#4a9eff" },
          { cat: "film" as const, label: "影视动漫", count: filmCount, desc: "动画、电影、剧集中的字体选择与排版艺术档案。", href: "/catalog?cat=film", color: "#e84545" },
        ].map((item, i) => (
          <Link
            key={item.cat}
            to={item.href}
            style={{
              display: "block",
              padding: "clamp(28px, 5vw, 56px) clamp(16px, 4vw, 48px)",
              borderRight: i === 0 ? "1px solid #222222" : "none",
              textDecoration: "none",
              background: "#000000",
              transition: "background 0.2s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0d0d0d")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#000000")}
          >
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "3px",
              height: "100%",
              background: item.color,
              opacity: 0.7,
            }} />
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: item.color,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px",
            }}>
              {item.count} 部作品
            </div>
            <div style={{
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 700,
              color: "#f0ede6",
              marginBottom: "10px",
            }}>
              {item.label}
            </div>
            <p style={{
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "13px",
              lineHeight: 1.7,
              color: "#7a7a8c",
              margin: "0 0 20px",
              maxWidth: "320px",
            }}>
              {item.desc}
            </p>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: item.color,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>
              浏览分类 →
            </span>
          </Link>
        ))}
      </section>

      {/* ── Recent additions ── */}
      <section style={{
        borderTop: "1px solid #222222",
        padding: "clamp(32px, 5vw, 56px) clamp(16px, 4vw, 64px)",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "20px",
        }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#7a7a8c",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}>
            最近收录
          </div>
          <Link to="/catalog" style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#7a7a8c",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}>
            全部 →
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {RECENT.map((work, i) => (
            <button
              key={work.id}
              onClick={() => setSelected(work)}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: "16px",
                alignItems: "center",
                padding: "14px 0",
                borderTop: i > 0 ? "1px solid #161616" : "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              <div style={{
                width: "48px",
                height: "64px",
                borderRadius: "2px",
                overflow: "hidden",
                flexShrink: 0,
                background: "#161616",
              }}>
                <img
                  src={work.image.replace("w=600&h=800", "w=96&h=128")}
                  alt={work.imageAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#f0ede6",
                  marginBottom: "3px",
                }}>
                  {work.title}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "#7a7a8c",
                }}>
                  {work.developer} · {work.fonts.length} 款字体
                </div>
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: work.accentColor,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                border: `1px solid ${work.accentColor}50`,
                padding: "3px 8px",
                borderRadius: "1px",
              }}>
                {work.category === "game" ? "游戏" : "影视"}
              </div>
            </button>
          ))}
        </div>
      </section>

      {selected && <WorkModal work={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
