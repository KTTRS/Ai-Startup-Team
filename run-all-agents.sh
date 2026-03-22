#!/bin/bash
# Run all SAINTE agents in priority order
# Usage: ./scripts/run-all-agents.sh
# Usage: ./scripts/run-all-agents.sh --parallel    (run all agents simultaneously)
# Usage: ./scripts/run-all-agents.sh --founding    (founding team only, no advisors)
# Usage: ./scripts/run-all-agents.sh --advisors    (advisors only)

SAINTE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RUNNER="$SAINTE_DIR/scripts/run-agent.sh"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)
LOG_DIR="$SAINTE_DIR/workspace/logs"
MODE=${1:-"--sequential"}

mkdir -p "$LOG_DIR"

echo "============================================" | tee -a "$LOG_DIR/agent-runs.log"
echo "[$DATE $TIME] SAINTE Agent Run — Mode: $MODE" | tee -a "$LOG_DIR/agent-runs.log"
echo "============================================" | tee -a "$LOG_DIR/agent-runs.log"

# Founding team in priority order (CEO sets direction, advisors review last)
FOUNDING_AGENTS=(
  "01-ceo"
  "08-behavioral-neuroscientist"
  "06-product-conversation-designer"
  "03-cto"
  "04-ai-ml-engineer"
  "05-fullstack-engineer"
  "09-head-of-sales"
  "07-brand-designer"
  "10-ops-finance"
  "11-community-culture"
  "12-ai-ethics"
  "02-ea"
)

ADVISOR_AGENTS=(
  "advisor-a-fqhc-mco"
  "advisor-b-public-health"
  "advisor-c-neuroscience"
  "advisor-d-ai-technical"
  "advisor-e-cultural"
  "advisor-f-legal"
)

run_sequential() {
  local agents=("$@")
  for agent in "${agents[@]}"; do
    echo "" | tee -a "$LOG_DIR/agent-runs.log"
    echo "--- Running: $agent ---" | tee -a "$LOG_DIR/agent-runs.log"
    bash "$RUNNER" "$agent"
    echo "--- Done: $agent ---" | tee -a "$LOG_DIR/agent-runs.log"
    # Small pause between agents to avoid rate limits
    sleep 5
  done
}

run_parallel() {
  local agents=("$@")
  local pids=()
  for agent in "${agents[@]}"; do
    echo "Launching: $agent" | tee -a "$LOG_DIR/agent-runs.log"
    bash "$RUNNER" "$agent" &
    pids+=($!)
    # Stagger launches by 10s to avoid hitting API rate limits simultaneously
    sleep 10
  done
  echo "Waiting for all agents to complete..." | tee -a "$LOG_DIR/agent-runs.log"
  for pid in "${pids[@]}"; do
    wait "$pid"
  done
}

case "$MODE" in
  --parallel)
    echo "Running all 18 agents in parallel (staggered launch)..."
    ALL_AGENTS=("${FOUNDING_AGENTS[@]}" "${ADVISOR_AGENTS[@]}")
    run_parallel "${ALL_AGENTS[@]}"
    ;;
  --founding)
    echo "Running founding team (12 agents) sequentially..."
    run_sequential "${FOUNDING_AGENTS[@]}"
    ;;
  --advisors)
    echo "Running advisor team (6 agents) sequentially..."
    run_sequential "${ADVISOR_AGENTS[@]}"
    ;;
  --sequential|*)
    echo "Running all 18 agents sequentially (founding first, advisors last)..."
    run_sequential "${FOUNDING_AGENTS[@]}"
    echo ""
    echo "=== Founding team complete. Running advisors... ===" | tee -a "$LOG_DIR/agent-runs.log"
    run_sequential "${ADVISOR_AGENTS[@]}"
    ;;
esac

DONE_TIME=$(date +%H:%M:%S)
echo "" | tee -a "$LOG_DIR/agent-runs.log"
echo "============================================" | tee -a "$LOG_DIR/agent-runs.log"
echo "[$DATE $DONE_TIME] All agents complete." | tee -a "$LOG_DIR/agent-runs.log"
echo "============================================" | tee -a "$LOG_DIR/agent-runs.log"
echo ""
echo "Outputs filed in: $SAINTE_DIR/workspace/"
echo "Logs in: $LOG_DIR/"
