"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const techData = [
  { name: "TypeScript", category: "Languages", level: 95 },
  { name: "JavaScript", category: "Languages", level: 90 },
  { name: "Python", category: "Languages", level: 85 },
  { name: "Next.js", category: "Frameworks", level: 90 },
  { name: "React", category: "Frameworks", level: 95 },
  { name: "Node.js", category: "Frameworks", level: 85 },
  { name: "FastAPI", category: "Frameworks", level: 80 },
  { name: "PostgreSQL", category: "Infrastructure", level: 85 },
  { name: "Docker", category: "Infrastructure", level: 90 },
  { name: "AWS", category: "Infrastructure", level: 80 },
  { name: "TensorFlow", category: "AI & Data", level: 75 },
  { name: "Pandas", category: "AI & Data", level: 80 },
  { name: "NumPy", category: "AI & Data", level: 85 },
];

const categoryColors = {
  Languages: "#BF616A",
  Frameworks: "#A3BE8C",
  "AI & Data": "#EBCB8B",
  Infrastructure: "#88C0D0",
};

function nodeRadius(d: { level: number }) {
  return Math.max(10, 16 + (d.level - 70) * 0.3);
}

export default function MyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // Clear previous SVG if any
    d3.select(container).select("svg").remove();

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("viewBox", `0 0 ${w} ${h}`)
      .style("font-family", "'AnonymousPro', monospace")
      .style("overflow", "visible");

    const defs = svg.append("defs");

    // Glow filter
    const glowFilter = defs.append("filter").attr("id", "glow");
    glowFilter
      .append("feGaussianBlur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");
    const feMerge = glowFilter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Background gradient
    const bgGrad = defs.append("radialGradient").attr("id", "bgGrad");
    bgGrad.append("stop").attr("offset", "0%").attr("stop-color", "currentColor").attr("stop-opacity", 0.03);
    bgGrad.append("stop").attr("offset", "100%").attr("stop-color", "currentColor").attr("stop-opacity", 0);

    // Background circle
    svg
      .append("circle")
      .attr("cx", w / 2)
      .attr("cy", h / 2)
      .attr("r", Math.min(w, h) * 0.4)
      .attr("fill", "url(#bgGrad)")
      .attr("stroke", "none");

    // Links group
    const linkG = svg.append("g").attr("class", "links");
    // Nodes group
    const nodeG = svg.append("g").attr("class", "nodes");

    // Build links between same-category items
    const links: { source: string; target: string }[] = [];
    techData.forEach((a, i) => {
      techData.forEach((b, j) => {
        if (i < j && a.category === b.category) {
          links.push({ source: a.name, target: b.name });
        }
      });
    });

    // Force simulation
    const simulation = d3
      .forceSimulation(techData)
      .force("link", d3.forceLink(links).id((d) => (d as any).name).distance(100))
      .force("charge", d3.forceManyBody().strength(-350))
      .force("center", d3.forceCenter(w / 2, h / 2))
      .force("collision", d3.forceCollide().radius(nodeRadius))
      .alphaDecay(0.02);

    const linkElements = linkG
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#81A1C1")
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.25);

    // Node groups
    const nodeGroups = nodeG
      .selectAll<SVGGElement, typeof techData[number]>("g")
      .data(techData)
      .join("g")
      .attr("opacity", 0);

    // Circles — animate radius in from 0
    nodeGroups
      .append("circle")
      .attr("r", 0)
      .attr("fill", (d) => categoryColors[d.category])
      .attr("stroke", "#2E3440")
      .attr("stroke-width", 2)
      .attr("filter", "url(#glow)")
      .transition()
      .duration(800)
      .delay((_d, i) => i * 80)
      .ease(d3.easeElasticOut.amplitude(1).period(0.5))
      .attr("r", (d) => nodeRadius(d));

    // Category ring around each node (subtle)
    nodeGroups
      .append("circle")
      .attr("r", (d) => nodeRadius(d) + 6)
      .attr("fill", "none")
      .attr("stroke", (d) => categoryColors[d.category])
      .attr("stroke-width", 1)
      .attr("opacity", 0.3)
      .attr("stroke-dasharray", "4 4")
      .transition()
      .duration(1000)
      .delay((_d, i) => i * 80 + 200)
      .attr("opacity", 0.15);

    // Labels
    nodeGroups
      .append("text")
      .attr("dy", (d) => nodeRadius(d) + 16)
      .attr("text-anchor", "middle")
      .attr("fill", "#2E3440")
      .attr("font-size", "11px")
      .attr("font-weight", 600)
      .attr("opacity", 0)
      .text((d) => d.name)
      .transition()
      .duration(400)
      .delay((_d, i) => i * 80 + 400)
      .attr("opacity", 1);

    // Pulsing rings animation
    nodeGroups.each(function (d) {
      const g = d3.select(this);
      const r = nodeRadius(d);
      const color = categoryColors[d.category];

      // Outer pulse ring
      const ring = g.append("circle").attr("r", r).attr("fill", "none").attr("stroke", color).attr("stroke-width", 2).attr("opacity", 0);
      ring
        .transition()
        .delay(Math.random() * 2000)
        .duration(2000)
        .repeat(true)
        .attrTween("r", () => (t) => r + t * 20)
        .attrTween("opacity", () => (t) => Math.max(0, 0.4 * (1 - t)));
    });

    // Hover interactions
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stack-tooltip")
      .style("position", "absolute")
      .style("padding", "8px 14px")
      .style("background", "rgba(236, 239, 244, 0.95)")
      .style("color", "#2E3440")
      .style("border-radius", "6px")
      .style("font-size", "13px")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("transition", "opacity 0.15s")
      .style("z-index", "1000")
      .style("box-shadow", "0 4px 12px rgba(0,0,0,0.15)")
      .style("font-family", "'AnonymousPro', monospace");

    nodeGroups
      .style("cursor", "grab")
      .on("mouseenter", function (event, d) {
        const group = d3.select(this);

        // Highlight connected links
        linkElements
          .transition()
          .duration(200)
          .attr("opacity", (l: any) => {
            const s = typeof l.source === "object" ? l.source : techData.find((n) => n.name === l.source);
            const t = typeof l.target === "object" ? l.target : techData.find((n) => n.name === l.target);
            return s.name === d.name || t.name === d.name ? 0.8 : 0.05;
          })
          .attr("stroke-width", (l: any) => {
            const s = typeof l.source === "object" ? l.source : techData.find((n) => n.name === l.source);
            const t = typeof l.target === "object" ? l.target : techData.find((n) => n.name === l.target);
            return s.name === d.name || t.name === d.name ? 3 : 1;
          });

        // Enlarge hovered node
        group.selectAll("circle").transition().duration(200).attr("r", (d: any) => {
          if (d3.select(this).attr("stroke-width") === "3") return nodeRadius(d) + 8;
          return nodeRadius(d) + 6;
        });

        // Show tooltip
        tooltip
          .html(`<strong>${d.name}</strong><br/><span style="color:${categoryColors[d.category]}">${d.category}</span> · ${d.level}%`)
          .style("opacity", 1)
          .style("left", `${event.pageX + 12}px`)
          .style("top", `${event.pageY - 36}px`);
      })
      .on("mouseleave", function (_event, d) {
        // Reset links
        linkElements.transition().duration(300).attr("opacity", 0.25).attr("stroke-width", 1.5);

        // Reset node size
        const group = d3.select(this);
        group.selectAll("circle:first-child").transition().duration(200).attr("r", (dd: any) => nodeRadius(dd));

        // Hide tooltip
        tooltip.style("opacity", 0);
      })
      .on("click", function (event, d) {
        // Toggle fixed position
        if ((d as any).fx) {
          (d as any).fx = null;
          (d as any).fy = null;
        } else {
          (d as any).fx = d.x;
          (d as any).fy = d.y;
        }
        simulation.alpha(0.3).restart();
      });

    // Tick handler
    simulation.on("tick", () => {
      linkElements
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      nodeGroups.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    // Drag behavior
    const drag = d3
      .drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        (d as any).fx = event.x;
        (d as any).fy = event.y;
      })
      .on("drag", (event, d) => {
        (d as any).fx = event.x;
        (d as any).fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        (d as any).fx = null;
        (d as any).fy = null;
      });

    // Delay drag setup until after initial animation
    setTimeout(() => {
      nodeGroups.call(drag);
    }, 1500);

    // Cleanup
    return () => {
      simulation.stop();
      tooltip.remove();
      d3.select(container).select("svg").remove();
    };
  }, []);

  return (
    <section className="border-b border-border py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Info panel */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">/ stack</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              My Tech Stack
            </h2>
            <p className="mt-4 text-muted-foreground">
              Interactive force-directed graph. Drag nodes to rearrange. Click to pin. Hover for details.
            </p>

            {/* Category legend */}
            <div className="mt-8 grid gap-3">
              {Object.entries(categoryColors).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm text-foreground/80">{cat}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-6 text-sm">
              <div>
                <span className="font-mono text-2xl font-bold text-accent">{techData.length}</span>
                <br />
                <span className="text-muted-foreground">Technologies</span>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-accent">4</span>
                <br />
                <span className="text-muted-foreground">Categories</span>
              </div>
            </div>
          </div>

          {/* Right: Visualization */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative w-full rounded-2xl border border-border bg-card"
              style={{ minHeight: "500px", maxHeight: "700px" }}
            >
              <div className="absolute top-4 right-4 z-10 font-mono text-xs text-muted-foreground/60">
                Force-directed graph · drag to interact
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}