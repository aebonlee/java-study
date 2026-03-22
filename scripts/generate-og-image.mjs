import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = resolve(__dirname, '..', 'public', 'og-image.png')

// 1200x630 OG image as SVG (dark blue gradient, Java branding)
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f1f2e"/>
      <stop offset="40%" stop-color="#1a3a52"/>
      <stop offset="70%" stop-color="#2d5a7b"/>
      <stop offset="100%" stop-color="#3a6d94"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="200" cy="500" r="200" fill="white" opacity="0.04"/>
  <circle cx="1000" cy="150" r="250" fill="white" opacity="0.04"/>
  <circle cx="600" cy="630" r="300" fill="white" opacity="0.02"/>

  <!-- Floating code text -->
  <text x="60" y="80" font-family="monospace" font-size="15" fill="white" opacity="0.07">public class Main {</text>
  <text x="880" y="110" font-family="monospace" font-size="15" fill="white" opacity="0.07">System.out.println("Hello");</text>
  <text x="80" y="560" font-family="monospace" font-size="15" fill="white" opacity="0.07">@SpringBootApplication</text>
  <text x="830" y="555" font-family="monospace" font-size="15" fill="white" opacity="0.07">interface Runnable {</text>
  <text x="300" y="55" font-family="monospace" font-size="15" fill="white" opacity="0.05">List&lt;String&gt; list = new ArrayList&lt;&gt;();</text>
  <text x="580" y="595" font-family="monospace" font-size="15" fill="white" opacity="0.05">@Autowired private UserService service;</text>

  <!-- Logo icon box -->
  <rect x="530" y="130" width="70" height="70" rx="14" fill="#E76F00"/>
  <text x="565" y="180" font-family="Georgia, serif" font-size="42" font-weight="bold" fill="white" text-anchor="middle">J</text>

  <!-- Small decorative line under logo -->
  <rect x="548" y="212" width="34" height="3" rx="1.5" fill="white" opacity="0.3"/>

  <!-- Title -->
  <text x="565" y="275" font-family="sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle">JavaMaster</text>

  <!-- Subtitle -->
  <text x="565" y="325" font-family="sans-serif" font-size="26" fill="white" opacity="0.85" text-anchor="middle">Java 기초부터 Spring Boot까지</text>

  <!-- Description -->
  <text x="565" y="370" font-family="sans-serif" font-size="19" fill="white" opacity="0.55" text-anchor="middle">체계적인 17개 챕터 Java 학습 플랫폼</text>

  <!-- Tags -->
  <rect x="155" y="415" width="110" height="34" rx="17" fill="white" opacity="0.1"/>
  <text x="210" y="437" font-family="sans-serif" font-size="14" fill="white" opacity="0.8" text-anchor="middle">Java 기초</text>

  <rect x="285" y="415" width="80" height="34" rx="17" fill="white" opacity="0.1"/>
  <text x="325" y="437" font-family="sans-serif" font-size="14" fill="white" opacity="0.8" text-anchor="middle">OOP</text>

  <rect x="385" y="415" width="130" height="34" rx="17" fill="white" opacity="0.1"/>
  <text x="450" y="437" font-family="sans-serif" font-size="14" fill="white" opacity="0.8" text-anchor="middle">제네릭/스트림</text>

  <rect x="535" y="415" width="120" height="34" rx="17" fill="white" opacity="0.1"/>
  <text x="595" y="437" font-family="sans-serif" font-size="14" fill="white" opacity="0.8" text-anchor="middle">서블릿/JSP</text>

  <rect x="675" y="415" width="130" height="34" rx="17" fill="white" opacity="0.1"/>
  <text x="740" y="437" font-family="sans-serif" font-size="14" fill="white" opacity="0.8" text-anchor="middle">Spring Boot</text>

  <!-- Stats row -->
  <text x="310" y="500" font-family="sans-serif" font-size="28" font-weight="bold" fill="white" opacity="0.9" text-anchor="middle">17</text>
  <text x="310" y="520" font-family="sans-serif" font-size="12" fill="white" opacity="0.45" text-anchor="middle">챕터</text>

  <rect x="400" y="486" width="1" height="40" fill="white" opacity="0.15"/>

  <text x="490" y="500" font-family="sans-serif" font-size="28" font-weight="bold" fill="white" opacity="0.9" text-anchor="middle">4</text>
  <text x="490" y="520" font-family="sans-serif" font-size="12" fill="white" opacity="0.45" text-anchor="middle">퀴즈</text>

  <rect x="580" y="486" width="1" height="40" fill="white" opacity="0.15"/>

  <text x="670" y="500" font-family="sans-serif" font-size="28" font-weight="bold" fill="white" opacity="0.9" text-anchor="middle">24</text>
  <text x="670" y="520" font-family="sans-serif" font-size="12" fill="white" opacity="0.45" text-anchor="middle">배지</text>

  <rect x="760" y="486" width="1" height="40" fill="white" opacity="0.15"/>

  <text x="850" y="500" font-family="sans-serif" font-size="28" font-weight="bold" fill="white" opacity="0.9" text-anchor="middle">무료</text>
  <text x="850" y="520" font-family="sans-serif" font-size="12" fill="white" opacity="0.45" text-anchor="middle">학습</text>

  <!-- URL -->
  <text x="565" y="590" font-family="sans-serif" font-size="15" fill="white" opacity="0.35" text-anchor="middle">java-study.dreamitbiz.com</text>
</svg>
`

async function generate() {
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath)

  console.log(`OG image generated: ${outputPath}`)
}

generate().catch(console.error)
