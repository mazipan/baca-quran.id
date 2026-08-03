export const CLASS_BY_SIZE = {
	xs: 'w-2 h-2',
	sm: 'w-4 h-4',
	md: 'w-6 h-6',
	lg: 'w-8 h-8',
	xl: 'w-10 h-10'
};

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const DIMENSION_CLASS_REGEX = /(?:^|\s)(?:w|h)-\S+/;

/**
 * Merges the size-based class with a consumer-passed class. CLASS_BY_SIZE only
 * contains width/height utilities, so if `clazz` supplies its own w-/h- utility
 * it fully replaces the size class instead of both landing in the DOM (which
 * would create a specificity tie decided by Tailwind's generated stylesheet
 * order rather than the consumer's intent).
 */
export function iconClass(size: IconSize, clazz?: string): string {
	if (clazz && DIMENSION_CLASS_REGEX.test(clazz)) {
		return clazz;
	}
	return [CLASS_BY_SIZE[size], clazz].filter(Boolean).join(' ');
}
