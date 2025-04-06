.PHONY: component

component:
	ComponentName=$(shell echo ${NAME} | grep -o "[^/]*$$" | tail -1); \
	mkdir -p src/components/$(NAME); \
	touch src/components/$(NAME)/index.ts; \
	touch src/components/$(NAME)/$$ComponentName.tsx; \
	echo """import { default as $$ComponentName } from './$$ComponentName';\
	\n\n\
	export default $$ComponentName;""" >> src/components/$(NAME)/index.ts; \
	echo "export default function $$ComponentName() { return <></>; }" >> src/components/$(NAME)/$$ComponentName.tsx;
