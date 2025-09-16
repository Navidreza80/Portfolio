import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getRepoDetail } from "@/lib/github";
import {
  Calendar,
  ChevronLeft,
  Eye,
  FileText,
  GitFork,
  Github,
  Star,
} from "lucide-react";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ repo: string }>;
}) {
  const { repo } = await params;
  const project = await getRepoDetail(repo);

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num?.toLocaleString() || "0";
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 mt-[60px]">
      {/* Header */}
      <header className="bg-background py-4 px-6 max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/projects"
            className="flex items-center text-sm text-purple-300/50  hover:text-purple-300/40 transition-colors"
          >
            <ChevronLeft size={16} className="mr-2 mb-0.5" />
            Back to Projects
          </Link>

          <div className="flex items-center space-x-4">
            <a
              href={project.html_url}
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-foreground rounded-md text-sm group font-medium hover:text-foreground/80 border border-border hover:border-white/40 transition-colors"
            >
              <Github
                size={16}
                className="mr-2 text-foreground group-hover:text-foreground/80"
              />
              View on GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Project Header */}
        <div className="bg-background rounded-lg shadow-sm p-6 mb-6 border border-white/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1 ">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {project.name}
              </h1>
              <p className="text-lg text-purple-300/50 mb-4">
                {project.description || "No description provided."}
              </p>

              {/* Tags / Topics */}
              {project.topics.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.topics.map((topic: string) => (
                    <span
                      key={topic}
                      className="bg-purple-300/70 dark:bg-blue-900/30 text-background px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              <div className="flex items-center space-x-4 border border-white/50 p-3 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center text-foreground">
                    <Star size={16} className="mr-1" />
                    <span className="font-semibold text-foreground">
                      {formatNumber(project.stars)}
                    </span>
                  </div>
                  <span className="text-xs text-purple-300/50">Stars</span>
                </div>

                <div className="text-center">
                  <div className="flex items-center text-foreground">
                    <GitFork size={16} className="mr-1" />
                    <span className="font-semibold text-foreground">
                      {formatNumber(project.forks)}
                    </span>
                  </div>
                  <span className="text-xs text-purple-300/50">Forks</span>
                </div>

                <div className="text-center">
                  <div className="flex items-center text-foreground">
                    <Eye size={16} className="mr-1" />
                    <span className="font-semibold text-foreground">
                      {formatNumber(project.watchers)}
                    </span>
                  </div>
                  <span className="text-xs text-purple-300/50">Watchers</span>
                </div>
              </div>

              <div className="flex items-center justify-between border border-white/50 p-3 rounded-lg">
                <div className="flex items-center text-foreground">
                  <Calendar size={16} className="mr-2 mb-0.5" />
                  <span className="text-sm">
                    Updated {formatDate(project.updatedAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/50 dark:border-gray-700">
            <Link
              href={project.html_url}
              target="_blank"
              className="inline-flex items-center text-blue-600 font-medium border border-white/50 rounded-md px-2 py-1"
            >
              Repository
            </Link>
            {project.homepage && (
              <Link
                href={project.homepage}
                target="_blank"
                className="inline-flex items-center text-green-600 font-medium border border-white/50 rounded-md px-2 py-1"
              >
                Live Project
              </Link>
            )}
          </div>
        </div>

        {/* README */}
        <div className="rounded-lg shadow-sm p-6 border border-white/50">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/50">
            <h2 className="text-xl font-semibold text-foreground flex items-center">
              <FileText size={20} className="mr-2" />
              README
            </h2>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              {project.language && (
                <span className="inline-flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                  {project.language}
                </span>
              )}
            </div>
          </div>

          <MarkdownRenderer content={project.readme} />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 px-6 border-t border-white/50">
        <div className="max-w-6xl mx-auto text-center text-sm text-purple-300/50">
          <p>Project data fetched from GitHub API</p>
        </div>
      </footer>
    </div>
  );
}
