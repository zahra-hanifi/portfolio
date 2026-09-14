// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const alt = 'Zahra Hanifi — Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
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
                    <div style={{ color: '#8b949e', fontSize: 26 }}>zahrahanifi.ir</div>
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