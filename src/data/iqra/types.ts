export interface IqraNewLetter {
	withFathah: string;
	name: string;
	bunyi: string;
}

// 'letters' = a normal drill page introducing new letter(s) (default when omitted).
// 'equivalence' = shows that different glyph shapes represent the same letter/sound.
// 'review' = pure mixed-letter review, no new letters introduced.
// 'pairs' = "PENTING" style page: pairs of easily-confused letters shown side by side.
// 'ebta' = final test page for the jilid.
export type IqraHalamanType = 'letters' | 'equivalence' | 'review' | 'pairs' | 'ebta';

export interface IqraHalaman {
	id: number;
	type?: IqraHalamanType;
	// Shown as a small badge/label for non-'letters' pages, e.g. 'PENTING', 'EBTA'.
	label?: string;
	newLetters: IqraNewLetter[];
	// Each row is an array of groups; each group is an array of letters.
	// Groups reflect the visual columns in the printed Iqra book, read right-to-left.
	// For 'pairs' pages, each row holds exactly 2 single-letter groups being contrasted.
	// NOTE: row content is transcribed from the scanned PDF (markdowns/Humam - 2000 -
	// Buku Iqro'...pdf) following the book's real cumulative-drill pattern; letter
	// progression and page structure are verified against the scan, but exact
	// cell-by-cell ordering should get a final proofread against the physical book
	// (see issue #521).
	rows: string[][][];
}
