import { useState } from "react"
import type { Work, FontUsage } from "../data"

const CAT_COLOR = { game: "#e8b923", film: "#e03535" }

// ── Shared primitives ─────────────────────────────────────────────────────────

function GenrePill({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
      fontSize: "11px",
      color: "rgba(240,237,230,0.7)",
      background: "rgba(0,0,0,0.45)",
      padding: "2px 7px",
      borderRadius: "2px",
      backdropFilter: "blur(4px)",
      letterSpacing: "0.02em",
    }}>
      {label}
    </span>
  )
}

// ── WorkCard ─────────────────────────────────────────────────────────────────

export function WorkCard({ work, onClick }: { work: Work; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        aspectRatio: "3/4",
        overflow: "hidden",
        border: "none",
        padding: 0,
        cursor: "pointer",
        background: "#0d0d0d",
        borderRadius: "2px",
      }}
    >
      <img
        src={work.image}
        alt={work.imageAlt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
      />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
      }} />
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: work.accentColor,
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      }} />
      <div style={{
        position: "absolute",
        top: "12px",
        right: "12px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: CAT_COLOR[work.category],
        background: "rgba(0,0,0,0.6)",
        border: `1px solid ${CAT_COLOR[work.category]}60`,
        padding: "2px 7px",
        borderRadius: "1px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>
        {work.category === "game" ? "游戏" : "影视"}
      </div>
      <div style={{
        position: "absolute",
        top: "12px",
        left: "12px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "rgba(240,237,230,0.5)",
        background: "rgba(0,0,0,0.5)",
        padding: "2px 7px",
        borderRadius: "1px",
        letterSpacing: "0.05em",
      }}>
        {work.fonts.length} 款字体
      </div>
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px 14px 14px",
      }}>
        <div style={{
          fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          fontWeight: 700,
          color: "#f0ede6",
          lineHeight: 1.2,
          marginBottom: "4px",
          textAlign: "left",
        }}>
          {work.title}
        </div>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "rgba(240,237,230,0.4)",
          marginBottom: "8px",
          letterSpacing: "0.05em",
          textAlign: "left",
        }}>
          {work.developer} · {work.year}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {work.genres.map((g) => <GenrePill key={g} label={g} />)}
        </div>
      </div>
    </button>
  )
}

// ── FontBlock ─────────────────────────────────────────────────────────────────

function FontBlock({ font, accent }: { font: FontUsage; accent: string }) {
  const [preview, setPreview] = useState(font.sampleText)

  return (
    <div style={{
      background: "#000000",
      border: "1px solid #222222",
      borderRadius: "2px",
      overflow: "hidden",
      marginBottom: "16px",
    }}>
      <div style={{
        padding: "28px 24px",
        borderBottom: "1px solid #222222",
        minHeight: "90px",
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{
          fontFamily: font.cssFamily || "serif",
          fontSize: "clamp(22px, 3.5vw, 36px)",
          color: "#f0ede6",
          lineHeight: 1.25,
          wordBreak: "break-word",
          width: "100%",
        }}>
          {preview}
        </div>
      </div>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #161616", background: "#0d0d0d" }}>
        <input
          type="text"
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
          placeholder="输入文字预览…"
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            outline: "none",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#7a7a8c",
          }}
        />
      </div>
      <div style={{
        padding: "14px 16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px 24px",
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>字体名称</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 600, color: "#f0ede6" }}>{font.name}</div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>使用角色</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: accent }}>{font.role}</div>
        </div>
        {font.foundry && (
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>字体厂商</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#a0a0b8" }}>{font.foundry}</div>
          </div>
        )}
        {font.year && (
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>发布年份</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#a0a0b8" }}>{font.year}</div>
          </div>
        )}
        <div style={{ gridColumn: "1 / -1" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>使用说明</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", lineHeight: 1.65, color: "#a0a0b8" }}>{font.notes}</div>
        </div>
        <div style={{ gridColumn: "1 / -1", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {font.googleFont && (
            <a
              href={`https://fonts.google.com/specimen/${encodeURIComponent(font.name.split("/")[0].trim().replace(/\s+/g, "+"))}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "#4ade80",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
                border: "1px solid #4ade8040",
                padding: "3px 8px",
                borderRadius: "1px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              ✓ 谷歌字体 →
            </a>
          )}
          <a
            href={`https://www.myfonts.com/search?query=${encodeURIComponent(font.name.split("/")[0].trim())}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "#7a7a8c",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textDecoration: "none",
              border: "1px solid #222222",
              padding: "3px 8px",
              borderRadius: "1px",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            MyFonts →
          </a>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(font.name.split("/")[0].trim() + " 字体")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "#7a7a8c",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textDecoration: "none",
              border: "1px solid #222222",
              padding: "3px 8px",
              borderRadius: "1px",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            搜索 →
          </a>
        </div>
      </div>
    </div>
  )
}

// ── WorkModal ─────────────────────────────────────────────────────────────────

export function WorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 200,
        overflowY: "auto",
        padding: "40px 20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0d0d0d",
          border: "1px solid #222222",
          borderRadius: "2px",
          width: "100%",
          maxWidth: "820px",
          position: "relative",
        }}
      >
        {/* Hero image */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <img
            src={work.image.replace("w=600&h=800", "w=1200&h=520")}
            alt={work.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(13,13,13,0.95) 100%)",
          }} />
          <div style={{ position: "absolute", bottom: "24px", left: "32px", right: "60px" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "10px", flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: CAT_COLOR[work.category],
                border: `1px solid ${CAT_COLOR[work.category]}60`,
                padding: "2px 8px",
                borderRadius: "1px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                {work.category === "game" ? "电子游戏" : "影视动漫"}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(240,237,230,0.4)" }}>
                {work.developer} · {work.year}
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 700,
              color: "#f0ede6",
              margin: "0 0 6px",
              lineHeight: 1.15,
            }}>
              {work.title}
            </h2>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(240,237,230,0.4)", fontStyle: "italic" }}>
              {work.titleEn}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#f0ede6",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 32px 32px" }}>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
            {work.genres.map((g) => (
              <span key={g} style={{
                fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
                fontSize: "12px",
                color: "#a0a0b8",
                background: "#161616",
                border: "1px solid #222222",
                padding: "3px 10px",
                borderRadius: "2px",
              }}>{g}</span>
            ))}
          </div>
          <p style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#a0a0b8",
            margin: "0 0 28px",
          }}>
            {work.description}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>
              使用字体 · {work.fonts.length} 款
            </div>
            <div style={{ flex: 1, height: "1px", background: "#222222" }} />
          </div>
          {work.fonts.map((font, i) => (
            <FontBlock key={i} font={font} accent={work.accentColor} />
          ))}
        </div>
      </div>
    </div>
  )
}
