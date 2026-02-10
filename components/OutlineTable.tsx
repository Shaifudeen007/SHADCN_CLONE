
import React, { useState } from 'react';
import { 
  GripVertical, 
  Columns, 
  Plus, 
  MoreVertical, 
  CheckCircle2, 
  Loader2, 
  ChevronDown,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

interface RowData {
  id: string;
  title: string;
  type: string;
  status: 'In Process' | 'Done';
  target: number;
  limit: number;
  reviewer: string;
}

const tableData: RowData[] = [
  { id: '1', title: 'Cover page', type: 'Cover page', status: 'In Process', target: 18, limit: 5, reviewer: 'Eddie Lake' },
  { id: '2', title: 'Table of contents', type: 'Table of contents', status: 'Done', target: 29, limit: 24, reviewer: 'Eddie Lake' },
  { id: '3', title: 'Executive summary', type: 'Narrative', status: 'Done', target: 10, limit: 13, reviewer: 'Eddie Lake' },
  { id: '4', title: 'Technical approach', type: 'Narrative', status: 'Done', target: 27, limit: 23, reviewer: 'Jamik Tashpulatov' },
  { id: '5', title: 'Design', type: 'Narrative', status: 'In Process', target: 2, limit: 16, reviewer: 'Jamik Tashpulatov' },
  { id: '6', title: 'Capabilities', type: 'Narrative', status: 'In Process', target: 20, limit: 8, reviewer: 'Jamik Tashpulatov' },
  { id: '7', title: 'Integration with existing systems', type: 'Narrative', status: 'In Process', target: 19, limit: 21, reviewer: 'Jamik Tashpulatov' },
  { id: '8', title: 'Innovation and Advantages', type: 'Narrative', status: 'Done', target: 25, limit: 26, reviewer: 'Assign reviewer' },
  { id: '9', title: "Overview of EMR's Innovative Solutions", type: 'Technical content', status: 'Done', target: 7, limit: 23, reviewer: 'Assign reviewer' },
  { id: '10', title: 'Advanced Algorithms and Machine Learning', type: 'Narrative', status: 'Done', target: 30, limit: 28, reviewer: 'Assign reviewer' },
];

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <button 
    onClick={onChange}
    className={cn(
      "h-4 w-4 rounded-md border flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2",
      checked ? "bg-zinc-950 border-zinc-950" : "bg-white border-zinc-300 hover:border-zinc-400 shadow-sm"
    )}
    aria-checked={checked}
  >
    {checked && <Check className="h-3 w-3 text-white stroke-[3.5px]" />}
  </button>
);

export const OutlineTable: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set(tableData.map(r => r.id)));
  const [allSelected, setAllSelected] = useState(true);

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedRows(newSelected);
    setAllSelected(newSelected.size === tableData.length);
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelectedRows(new Set());
      setAllSelected(false);
    } else {
      setSelectedRows(new Set(tableData.map(r => r.id)));
      setAllSelected(true);
    }
  };

  return (
    <div className="space-y-6 mt-12 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation and Top Actions */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-1">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-2 lg:pb-0 -mx-1 px-1">
          <button className="px-4 py-1.5 text-xs font-bold border border-zinc-200 rounded-lg bg-white shadow-sm whitespace-nowrap min-w-max">Outline</button>
          <button className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors whitespace-nowrap min-w-max">
            Past Performance <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-[9px] font-bold text-zinc-500">3</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors whitespace-nowrap min-w-max">
            Key Personnel <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-[9px] font-bold text-zinc-500">2</span>
          </button>
          <button className="px-4 py-1.5 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors whitespace-nowrap min-w-max">Focus Documents</button>
        </div>
        <div className="flex items-center gap-2 ml-0 lg:ml-auto">
          <Button variant="outline" size="sm" className="h-8 px-3 lg:px-4 gap-2 text-[10px] font-bold rounded-lg border-zinc-200 bg-white flex-1 lg:flex-none">
            <Columns className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Customize Columns</span>
            <span className="sm:hidden">Columns</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 px-3 lg:px-4 gap-2 text-[10px] font-bold rounded-lg border-zinc-200 bg-white flex-1 lg:flex-none">
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Add Section</span>
            <span className="sm:hidden">Section</span>
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-xl border border-zinc-100 overflow-hidden bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
        <div className="overflow-x-auto w-full no-scrollbar">
          <table className="w-full text-left text-sm border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white text-[10px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-50">
                <th className="w-12 px-4 py-4"></th>
                <th className="w-12 py-4">
                  <Checkbox checked={allSelected} onChange={toggleAll} />
                </th>
                <th className="py-4 px-2 min-w-[200px]">Header</th>
                <th className="py-4 px-2">Section Type</th>
                <th className="py-4 px-2">Status</th>
                <th className="py-4 px-2 text-center w-24">Target</th>
                <th className="py-4 px-2 text-center w-24">Limit</th>
                <th className="py-4 px-2 min-w-[180px]">Reviewer</th>
                <th className="w-12 px-4 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {tableData.map((row) => (
                <tr 
                  key={row.id} 
                  className={cn(
                    "group transition-colors",
                    selectedRows.has(row.id) ? "bg-zinc-50/30" : "bg-transparent hover:bg-zinc-50/50"
                  )}
                >
                  <td className="px-4 py-4">
                    <GripVertical className="h-3.5 w-3.5 text-zinc-300 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" />
                  </td>
                  <td className="py-4">
                    <Checkbox checked={selectedRows.has(row.id)} onChange={() => toggleRow(row.id)} />
                  </td>
                  <td className="py-4 px-2">
                    <span className="text-[13px] font-semibold text-zinc-900">{row.title}</span>
                  </td>
                  <td className="py-4 px-2">
                    <span className="inline-flex items-center rounded-lg border border-zinc-100 bg-zinc-50/50 px-2 py-0.5 text-[10px] font-bold text-zinc-500">
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 px-2">
                    <div className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold",
                      row.status === 'Done' ? "text-emerald-600 bg-emerald-50 border-emerald-100" : "text-zinc-500 bg-zinc-50 border-zinc-100"
                    )}>
                      {row.status === 'Done' ? (
                        <CheckCircle2 className="h-3 w-3 fill-emerald-600 text-white" />
                      ) : (
                        <Loader2 className="h-3 w-3 animate-spin-slow" />
                      )}
                      {row.status}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center text-zinc-900 font-semibold">{row.target}</td>
                  <td className="py-4 px-2 text-center text-zinc-900 font-semibold">{row.limit}</td>
                  <td className="py-4 px-2">
                    {row.reviewer === 'Assign reviewer' ? (
                      <button className="flex items-center justify-between w-full max-w-[160px] px-3 py-1.5 text-[11px] font-bold border border-zinc-200 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-white hover:border-zinc-300 transition-all group/btn">
                        Assign reviewer
                        <ChevronDown className="h-3 w-3 opacity-50 group-hover/btn:opacity-100" />
                      </button>
                    ) : (
                      <span className="text-[13px] font-semibold text-zinc-900">{row.reviewer}</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <MoreVertical className="h-4 w-4 text-zinc-300 cursor-pointer hover:text-zinc-900 transition-colors" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-6 py-4 border-t border-zinc-50 bg-white">
          <p className="text-[11px] text-zinc-400 font-bold">
            {selectedRows.size} of 68 row(s) selected.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-zinc-400 whitespace-nowrap">Rows per page</span>
              <div className="flex items-center gap-2 h-7 px-2 border border-zinc-200 rounded-md text-[11px] font-bold cursor-pointer hover:bg-zinc-50 transition-colors">
                10
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <p className="text-[11px] font-bold text-zinc-400 whitespace-nowrap">Page 1 of 7</p>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-zinc-200"><ChevronsLeft className="h-3.5 w-3.5" /></Button>
                <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-zinc-200"><ChevronLeft className="h-3.5 w-3.5" /></Button>
                <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-zinc-200"><ChevronRight className="h-3.5 w-3.5" /></Button>
                <Button variant="outline" size="icon" className="h-7 w-7 rounded-md border-zinc-200"><ChevronsRight className="h-3.5 w-3.5" /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
