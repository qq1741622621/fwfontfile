import { useState } from "react"
import { Link } from "react-router"

type FormState = "idle" | "submitting" | "done"

export default function Submit() {
  const [form, setForm] = useState({
    workTitle: "",
    workTitleEn: "",
    category: "game",
    year: "",
    developer: "",
    genres: "",
    fontName: "",
    fontRole: "",
    fontFoundry: "",
    fontYear: "",
    fontNotes: "",
    submitterName: "",
    submitterEmail: "",
    reference: "",
    extra: "",
  })
  const [state, setState] = useState<FormState>("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState("submitting")
    setTimeout(() => setState("done"), 1200)
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#000000",
    border: "1px solid #222222",
    borderRadius: "2px",
    padding: "10px 12px",
    color: "#f0ede6",
    fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.15s",
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    color: "#7a7a8c",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    display: "block",
    marginBottom: "6px",
  }

  const sectionHead = (label: string, sub?: string) => (
    <div style={{ marginBottom: "20px" }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "#336BF4",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: "4px",
      }}>
        {label}
      </div>
      {sub && (
        <div style={{
          fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
          fontSize: "13px",
          color: "#7a7a8c",
          lineHeight: 1.6,
        }}>
          {sub}
        </div>
      )}
    </div>
  )

  if (state === "done") {
    return (
      <div style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(48px, 8vw, 100px) clamp(16px, 4vw, 64px)",
        textAlign: "center",
        gap: "20px",
      }}>
        <div style={{
          width: "64px",
          height: "64px",
          background: "rgba(51,107,244,0.12)",
          border: "1px solid rgba(232,168,37,0.3)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          marginBottom: "8px",
        }}>
          ✓
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 700,
          color: "#f0ede6",
          margin: 0,
          fontStyle: "italic",
        }}>
          提交成功，感谢贡献！
        </h2>
        <p style={{
          fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
          fontSize: "14px",
          color: "#7a7a8c",
          lineHeight: 1.7,
          maxWidth: "440px",
          margin: 0,
        }}>
          我们会在1–2个工作日内完成核实，通过审核后将正式收录到档案中。
          如有必要会通过你留下的邮件地址与你联系。
        </p>
        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          <button
            onClick={() => { setForm({ workTitle: "", workTitleEn: "", category: "game", year: "", developer: "", genres: "", fontName: "", fontRole: "", fontFoundry: "", fontYear: "", fontNotes: "", submitterName: "", submitterEmail: "", reference: "", extra: "" }); setState("idle") }}
            style={{
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
              background: "#336BF4",
              border: "1px solid #336BF4",
              padding: "10px 24px",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            再次提交
          </button>
          <Link to="/catalog" style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "14px",
            color: "#a0a0b8",
            background: "transparent",
            border: "1px solid #222222",
            padding: "10px 24px",
            borderRadius: "2px",
            textDecoration: "none",
          }}>
            浏览档案
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <section style={{
        padding: "clamp(36px, 6vw, 72px) clamp(16px, 4vw, 64px) clamp(24px, 4vw, 40px)",
        borderBottom: "1px solid #222222",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "end",
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#336BF4",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "16px",
          }}>
            社区贡献
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5.5vw, 64px)",
            fontWeight: 700,
            color: "#f0ede6",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: "0 0 16px",
          }}>
            提交<br />
            <span style={{ fontStyle: "italic", color: "#336BF4" }}>字体收录</span>
          </h1>
          <p style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#7a7a8c",
            margin: 0,
            maxWidth: "400px",
          }}>
            发现了档案中还未收录的字体用例？填写下方表单提交给我们，
            通过核实后将正式加入档案。
          </p>
        </div>

        {/* Guidelines */}
        <div style={{
          background: "#0d0d0d",
          border: "1px solid #222222",
          borderRadius: "2px",
          padding: "24px",
          alignSelf: "end",
        }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "#7a7a8c",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "16px",
          }}>
            提交须知
          </div>
          {[
            "请尽量提供字体的可靠来源或参考截图",
            "商业字体与开源字体均可提交",
            "同一作品可多次提交不同字体",
            "信息核实后约1–2个工作日审核完成",
          ].map((tip, i) => (
            <div key={i} style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              marginBottom: i < 3 ? "10px" : 0,
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#336BF4", flexShrink: 0, marginTop: "1px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif", fontSize: "13px", color: "#a0a0b8", lineHeight: 1.5 }}>
                {tip}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "clamp(32px, 5vw, 64px) clamp(16px, 4vw, 64px)" }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: "720px" }}>

          {/* ── Part 1: Work info ── */}
          {sectionHead("01 · 作品信息", "请填写字体出现的游戏或影视作品基本信息。")}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>作品名称（中文）*</label>
              <input name="workTitle" value={form.workTitle} onChange={handleChange} required placeholder="例：攻壳机动队" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>作品名称（英文）</label>
              <input name="workTitleEn" value={form.workTitleEn} onChange={handleChange} placeholder="例：Ghost in the Shell" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>类型 *</label>
              <select name="category" value={form.category} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                <option value="game">电子游戏</option>
                <option value="film">影视动漫</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>发行年份 *</label>
              <input name="year" value={form.year} onChange={handleChange} required placeholder="例：1995" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>开发商 / 出品方</label>
              <input name="developer" value={form.developer} onChange={handleChange} placeholder="例：Production I.G" style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: "36px" }}>
            <label style={labelStyle}>题材标签（逗号分隔）</label>
            <input name="genres" value={form.genres} onChange={handleChange} placeholder="例：科幻动画, 赛博朋克, 哲学" style={inputStyle} />
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "#222222", marginBottom: "36px" }} />

          {/* ── Part 2: Font info ── */}
          {sectionHead("02 · 字体信息", "请填写你要提交的字体具体信息，包括在作品中的使用方式。")}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>字体名称 *</label>
              <input name="fontName" value={form.fontName} onChange={handleChange} required placeholder="例：DIN 1451" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>使用角色 *</label>
              <input name="fontRole" value={form.fontRole} onChange={handleChange} required placeholder="例：城市标牌字体、UI主字体" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>字体厂商 / 设计师</label>
              <input name="fontFoundry" value={form.fontFoundry} onChange={handleChange} placeholder="例：Linotype、Adobe" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>字体发布年份</label>
              <input name="fontYear" value={form.fontYear} onChange={handleChange} placeholder="例：1931" style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>字体使用说明 *</label>
            <textarea
              name="fontNotes"
              value={form.fontNotes}
              onChange={handleChange}
              required
              rows={4}
              placeholder="请描述该字体在作品中的具体使用场景、视觉特点与设计意图…"
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
            />
          </div>

          <div style={{ marginBottom: "36px" }}>
            <label style={labelStyle}>参考来源 / 截图链接</label>
            <input name="reference" value={form.reference} onChange={handleChange} placeholder="可以是截图、字体识别工具链接、官方资料等" style={inputStyle} />
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "#222222", marginBottom: "36px" }} />

          {/* ── Part 3: Submitter info ── */}
          {sectionHead("03 · 提交者信息", "选填。填写后我们可以在收录时注明来源并联系你核实。")}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>姓名 / 昵称</label>
              <input name="submitterName" value={form.submitterName} onChange={handleChange} placeholder="例：字体爱好者小李" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>电子邮件</label>
              <input name="submitterEmail" value={form.submitterEmail} onChange={handleChange} type="email" placeholder="你的邮箱地址" style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: "36px" }}>
            <label style={labelStyle}>补充说明</label>
            <textarea
              name="extra"
              value={form.extra}
              onChange={handleChange}
              rows={3}
              placeholder="其他任何你认为有价值的信息…"
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
            />
          </div>

          {/* Submit */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button
              type="submit"
              disabled={state === "submitting"}
              style={{
                fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#000000",
                background: state === "submitting" ? "#b88a1e" : "#336BF4",
                border: "none",
                padding: "12px 32px",
                borderRadius: "2px",
                cursor: state === "submitting" ? "wait" : "pointer",
                transition: "opacity 0.15s",
              }}
            >
              {state === "submitting" ? "提交中…" : "提交收录"}
            </button>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#7a7a8c",
            }}>
              标有 * 的为必填项
            </span>
          </div>
        </form>
      </section>
    </div>
  )
}
