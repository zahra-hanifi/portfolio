// src/app/opengraph-image.png/route.tsx
// A route handler (not the opengraph-image file convention) so the static export
// emits `opengraph-image.png` with an extension — GitHub Pages serves it as image/png.
import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

const size = { width: 1200, height: 630 }

export function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#0d1117',
                    padding: 80,
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 14,
                            background: '#5eead4',
                            color: '#0d1117',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 34,
                            fontWeight: 700,
                        }}
                    >
                        Z
                    </div>
                    <div style={{ color: '#8b949e', fontSize: 26 }}>
                        zahra-hanifi.github.io
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ color: '#e6edf3', fontSize: 68, lineHeight: 1.15 }}>
                        Frontends for systems where
                    </div>
                    <div style={{ display: 'flex', color: '#5eead4', fontSize: 68, lineHeight: 1.15 }}>
                        latency and uptime are the product.
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ color: '#e6edf3', fontSize: 32 }}>Zahra Hanifi</div>
                        <div style={{ color: '#8b949e', fontSize: 24 }}>Frontend Engineer</div>
                    </div>
                    <div style={{ color: '#8b949e', fontSize: 22 }}>
                        Vue · Nuxt · React · Next.js · TypeScript
                    </div>
                </div>
            </div>
        ),
        size
    )
}