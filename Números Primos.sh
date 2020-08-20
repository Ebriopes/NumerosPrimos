#!/bin/bash

	#Decalaración de variables
		declare -a arr=2 -a arp=25
		declare a=1 b=1 c=0 
		declare lp="Los primeros "  np="números primos: "
		ee=echo

	#Menu
		clear
		$ee
		echo 	"	@---------------------------------------@"
		echo 	"	|                                       |"
		echo 	"	| Números primos (2, 3, 5, 7, ...)      |"
		echo 	"	|                                       |"
		echo 	"	| Este script crea los primeros	        |"
		echo 	"	| números primos que desees.            |"
		echo 	"	|                                       |"
		echo 	"	| Por favor, indica los primeros        |"
		echo 	"	| números que requieras.                |"
		echo 	"	|                                       |"
		echo 	"	| Para salir teclee la letra \"Q\"        |"
		echo 	"	|                                       |"
		echo 	"	@---------------------------------------@"
		$ee
		$ee
		echo -n "	Cantidad: "
		read prim
		let prim1=$prim-1

	#Opciones de selcción
		if [[ $prim = 1 ]]; then
			echo "	El primer número primo: " ${arr[*]}

		elif [[ $prim = 2 ]]; then
			let arr[1]=${arr[0]}+1
			$ee "	"$lp $prim $np ${arr[*]}

		elif [[ $prim -ge 3 ]]; then

			let arr[1]=${arr[0]}+1
			# while [[ ${#arr[*]} -lt $prim ]]; do
				
				#Generación de números primos (6N+-1)
					while [[ $a -lt $prim1 ]]; do
						let a=$a+1
						let arr[$a]=6*$b-1
						if [[ a -lt $prim1 ]]; then
							let a=$a+1
							let arr[$a]=6*$b+1
							let b=$b+1
						fi
					done

				#Generación de conjunto (6NP+-P)
					# if [[ ${arp[$c]} -lt ${arr[$a]} ]]; then
						#Bucle que aumenta en uno a P
						for (( i = 2; i < $prim; i++ )); do
							#Evaluación donde se calcula si el mayor valor 
							#del conjunto (6NP+-P) es mayor al del conjunto (6N+-1)
							if [[ ${arp[$c]} -le ${arr[$a]} ]]; then
								let d=1
								#Bucle donde se genera un valor para cada indice de "arp[]"
								#mientras se evalua que no sea mayor que el ultimo valor de "arr[]" 
								while [[ ${arp[$c]} -le ${arr[$a]} ]]; do
									if [[ ${arp[$c]} != 0 ]]; then
										let c=$c+1
									fi 
									let arp[$c]=6*$d*${arr[$i]}+${arr[$i]}
									if [[ ${arp[$c]} -le ${arr[$a]} ]]; then
										let c=$c+1 d=$d+1
										let arp[$c]=6*$d*${arr[$i]}-${arr[$i]}
									fi
								done
								#Le doy el valor cero a el ultimo array
								#para después ubicarlo y reemplazarlo en el bucle
								let arp[$c]=0
							fi 
						done
						unset arp[$c]
					# fi
					#Elimino el ultimo indice del array

				#Eliminamos los números repetidos en el segundo array
					let l=${#arp[*]}
					for (( j=0; j < $l; j++ )); do
							for (( k=0; k < $l; k++ )); do
							if [[ $j -ne $k ]]; then
								if [[ ${arp[$j]} -eq ${arp[$k]} ]]; then
									unset arp[$k]
								fi
							fi
						done
					done
					# let c=${#arp[*]]}-1

				#comparación de arrays / también eliminamos los valores que coinciden
					let ll=${#arr[*]}
					for (( m=0; m<${#arp[*]} ; m++ )); do
						for (( n=0; n<$ll; n++ )); do
							if [[ arp[$m] -eq arr[$n] ]]; then
								unset arr[$n]
							fi
						done
					done

				# let prim1=2*$prim-${#arr[*]}

			# done

			$ee "	"$lp $prim $np ${arr[*]}
			$ee "	"${#arr[*]}
			$ee "	"$lp números no primos ${arp[*]}
			$ee "	"${#arp[*]}
		fi
