import { getRepos } from "@/lib/github";
import { ChevronRight, Circle, Eye, GitFork, Star } from "lucide-react";
import Link from "next/link";

export default async function ProjectsPage() {
  const repos = await getRepos();

  // Format numbers with K/M abbreviations for large numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num?.toString() || "0";
  };

  // Get color for programming language (matching GitHub's language colors)
  const getLanguageColor = (language: string) => {
    const languageColors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      CSS: "#563d7c",
      HTML: "#e34c26",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      C: "#555555",
      Shell: "#89e051",
      Swift: "#ffac45",
      Kotlin: "#F18E33",
      Vue: "#41b883",
      Dart: "#00B4AB",
      Elixir: "#6e4a7e",
      Clojure: "#db5855",
      Haskell: "#5e5086",
      Scala: "#c22d40",
      Perl: "#0298c3",
      Lua: "#000080",
      Julia: "#a270ba",
      R: "#198CE7",
      MATLAB: "#e16737",
      PowerShell: "#012456",
      TeX: "#3D6117",
      Vimscript: "#199f4b",
      DM: "#447265",
      Makefile: "#427819",
      SCSS: "#c6538c",
      Less: "#1d365d",
      Stylus: "#ff6347",
      Svelte: "#ff3e00",
      Elm: "#60B5CC",
      PureScript: "#1D222D",
      WebAssembly: "#04133b",
      Markdown: "#083fa1",
      Dockerfile: "#384d54",
      YAML: "#cb171e",
      JSON: "#292929",
      SQL: "#e38c00",
      PLpgSQL: "#336790",
      TSQL: "#e38c00",
      GraphQL: "#e10098",
      Assembly: "#6E4C13",

      OCaml: "#3be133",
      FSharp: "#b845fc",

      Erlang: "#B83998",

      ReScript: "#ed5051",
      Reason: "#ff5847",
      Nim: "#ffc200",
      Crystal: "#000100",
      Groovy: "#4298b8",
      Racket: "#3c5caa",
      Perl6: "#0000fb",

      Pascal: "#E3F171",
      Scheme: "#1e4aec",
      CoffeeScript: "#244776",
      LiveScript: "#499886",
      Vala: "#fbe5cd",
    };

    return languageColors[language] || "#ccc";
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2 mt-4">
          My GitHub Projects
        </h1>
        <p className="text-purple-300/70">
          A collection of my open-source projects and contributions
        </p>
      </div>

      <div className="grid gap-6">
        {repos.map(
          (repo: {
            name: string;
            description: string;
            language: string;
            stars: number;
            forks: number;
            watchers: number;
            license: { name: string };
            topics: string[];
          }) => (
            <div
              key={repo.name}
              className="p-6 border border-white/50 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {repo.name}
                  </h2>
                  <p className="text-purple-300/50 mb-4">
                    {repo.description || "No description provided"}
                  </p>

                  {/* Repository metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                    {repo.language && (
                      <div className="flex items-center">
                        <Circle
                          size={12}
                          className="mr-1"
                          style={{ color: getLanguageColor(repo.language) }}
                          fill={getLanguageColor(repo.language)}
                        />
                        <span>{repo.language}</span>
                      </div>
                    )}

                    <div className="flex items-center">
                      <Star size={14} className="mr-1 mb-1" />
                      <span>{formatNumber(repo.stars)}</span>
                    </div>

                    <div className="flex items-center">
                      <GitFork size={14} className="mr-1 mb-1" />
                      <span>{formatNumber(repo.forks)}</span>
                    </div>

                    <div className="flex items-center">
                      <Eye size={14} className="mr-1 mb-1" />
                      <span>{formatNumber(repo.watchers)}</span>
                    </div>

                    {repo.license?.name && (
                      <div className="flex items-center">
                        <span>{repo.license.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  href={`/projects/${repo.name}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group transition-colors"
                >
                  View details
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/50">
                  {repo.topics.map((topic: string) => (
                    <span
                      key={topic}
                      className="bg-purple-300/80 text-background px-2 py-1 rounded-md text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </main>
  );
}
