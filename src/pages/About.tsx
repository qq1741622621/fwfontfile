import { Link } from "react-router"
import { WORKS } from "../data"

const fontCount = WORKS.reduce((n, w) => n + w.fonts.length, 0)

export default function About() {
  return (
    <div>
      {/* Header */}
      <section style={{
        padding: "clamp(48px, 8vw, 100px) clamp(16px, 4vw, 64px) 0",
        borderBottom: "1px solid #222222",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 5vw, 80px)",
        alignItems: "end",
      }}>
        <div style={{ paddingBottom: "clamp(32px, 5vw, 64px)" }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#336BF4",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "20px",
          }}>
            关于本站
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700,
            color: "#f0ede6",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}>
            字体是<br />
            <span style={{ fontStyle: "italic", color: "#336BF4" }}>无声的</span>叙事
          </h1>
          <p style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            lineHeight: 1.85,
            color: "#7a7a8c",
            margin: 0,
            maxWidth: "440px",
          }}>
            每一款字体背后，都藏着一个创作决策。这个档案试图记录这些决策，
            让字体的选择不再是理所当然的背景，而是值得被认真对待的叙事工具。
          </p>
        </div>

        {/* Portrait area */}
        <div style={{
          position: "relative",
          alignSelf: "stretch",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}>
          <div style={{
            width: "100%",
            paddingBottom: "clamp(32px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0",
          }}>
            {/* Decorative font specimens */}
            {[
              { text: "Aa", family: "'Cinzel Decorative', serif", size: "72px", color: "rgba(51,107,244,0.12)" },
              { text: "字", family: "'Noto Serif SC', serif", size: "88px", color: "rgba(240,237,230,0.06)" },
              { text: "Ff", family: "var(--font-display)", size: "60px", color: "rgba(51,107,244,0.08)", style: "italic" },
            ].map((s, i) => (
              <div key={i} aria-hidden style={{
                fontFamily: s.family,
                fontSize: s.size,
                color: s.color,
                lineHeight: 1,
                fontStyle: s.style,
                userSelect: "none",
              }}>
                {s.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author bio */}
      <section style={{
        padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px)",
        borderBottom: "1px solid #222222",
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: "clamp(32px, 5vw, 80px)",
        alignItems: "start",
      }}>
        {/* Avatar + info card */}
        <div>
          <div style={{
            width: "100%",
            aspectRatio: "1",
            border: "1px solid #222222",
            borderRadius: "2px",
            marginBottom: "20px",
            position: "relative",
            overflow: "hidden",
            background: "#161616",
          }}>
            <img
              src="/src/imports/Frame_3.jpg"
              alt="作者头像"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              right: "16px",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "#336BF4",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}>
              </div>
            </div>
          </div>

          {/* Stat pills */}
          {[
            { n: WORKS.length.toString(), label: "部作品收录" },
            { n: fontCount.toString(), label: "款字体记录" },
            { n: "2026", label: "年创立" },
          ].map((s) => (
            <div key={s.label} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "10px 0",
              borderBottom: "1px solid #161616",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "#f0ede6", fontStyle: "italic" }}>{s.n}</span>
            </div>
          ))}
        </div>

        {/* Bio text */}
        <div>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#7a7a8c",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "16px",
          }}>
            作者简介
          </div>
          <h2 style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "clamp(22px, 3vw, 30px)",
            fontWeight: 700,
            color: "#f0ede6",
            margin: "0 0 8px",
            lineHeight: 1.2,
          }}>
            陈一鸣
          </h2>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "#336BF4",
            marginBottom: "28px",
            letterSpacing: "0.05em",
          }}>
            字体研究者 / 独立设计师
          </div>

          {[
            "毕业于四川传媒大学，长期从事游戏与影视视觉设计工作。在十余年的从业经历中，逐渐对字体在叙事中所扮演的角色产生了浓厚的研究兴趣。",
            "「字体档案」创立于2026年，最初只是记录自己在分析游戏与动画时的字体笔记。随着积累的内容越来越多，逐渐演变成了这个面向所有对字体感兴趣的人开放的公共档案库。",
            "相信字体是一种无声的叙事语言。一款好的字体选择，往往能在观众尚未意识到之前，就已经完成了情绪基调的建立。这也是我希望通过这个网站传达的核心观点。",
            "目前正在撰写一本关于字体和绘画的专题文章，预计2027年发布。欢迎对相关话题感兴趣的研究者与我交流。",
          ].map((para, i) => (
            <p key={i} style={{
              fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
              fontSize: "14px",
              lineHeight: 1.9,
              color: "#a0a0b8",
              margin: "0 0 20px",
            }}>
              {para}
            </p>
          ))}

          {/* Links */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
            {[
              { label: "电子邮件", value: "hello@zitidangan.com", icon: "" },
              { label: "微博", value: "@字体档案", icon: "" },
              { label: "推特", value: "@fontarchive_cn", icon: "" },
            ].map((link) => (
              <div key={link.label} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#161616",
                border: "1px solid #222222",
                borderRadius: "2px",
                padding: "8px 14px",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#336BF4" }}>{link.icon}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#7a7a8c", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1px" }}>{link.label}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#f0ede6" }}>{link.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{
        padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 64px)",
        borderBottom: "1px solid #222222",
      }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "#7a7a8c",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "32px",
        }}>
          项目理念
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1px",
          background: "#222222",
          border: "1px solid #222222",
        }}>
          {[
            {
              icon: "◈",
              title: "记录而非评判",
              body: "字体档案的目标是客观记录字体的使用情况，提供上下文与历史背景，而非对设计选择作出好坏评价。",
            },
            {
              icon: "◇",
              title: "研究驱动",
              body: "每一条收录都经过资料核实与文献查证。我们尽量追溯字体的实际来源，避免道听途说的错误归因。",
            },
            {
              icon: "○",
              title: "开放共享",
              body: "档案内容对所有人免费开放。字体知识不应该是少数人的特权，设计素养的提升需要信息的自由流通。",
            },
            {
              icon: "△",
              title: "社区共建",
              body: "欢迎任何人提交收录建议与勘误。一个人的视野是有限的，这个档案因为更多人的参与而变得更加完整。",
            },
          ].map((item) => (
            <div key={item.title} style={{
              background: "#000000",
              padding: "28px 24px",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                color: "#336BF4",
                marginBottom: "12px",
                fontStyle: "italic",
              }}>
                {item.icon}
              </div>
              <div style={{
                fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#f0ede6",
                marginBottom: "10px",
              }}>
                {item.title}
              </div>
              <p style={{
                fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
                fontSize: "13px",
                lineHeight: 1.75,
                color: "#7a7a8c",
                margin: 0,
              }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "clamp(48px, 7vw, 80px) clamp(16px, 4vw, 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
      }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 4vw, 40px)",
          fontWeight: 700,
          color: "#f0ede6",
          fontStyle: "italic",
          lineHeight: 1.2,
        }}>
          发现了新的字体用例？
        </div>
        <p style={{
          fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
          fontSize: "14px",
          color: "#7a7a8c",
          lineHeight: 1.7,
          maxWidth: "480px",
          margin: 0,
        }}>
          档案的完整性依赖每一位关注者的贡献。如果你发现了我们尚未收录的字体用例，欢迎通过提交页面告知我们。
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link to="/submit" style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#000000",
            background: "#336BF4",
            padding: "10px 28px",
            borderRadius: "2px",
            textDecoration: "none",
          }}>
            提交收录
          </Link>
          <Link to="/catalog" style={{
            fontFamily: "var(--font-sans), 'Noto Sans SC', sans-serif",
            fontSize: "14px",
            color: "#a0a0b8",
            background: "transparent",
            border: "1px solid #222222",
            padding: "10px 28px",
            borderRadius: "2px",
            textDecoration: "none",
          }}>
            浏览档案
          </Link>
        </div>
      </section>
    </div>
  )
}
