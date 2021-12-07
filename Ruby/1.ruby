lines = File.readlines("1.txt")
count = 0
lines.each_with_index do |line, i|
    if i > 0 && line > lines[i -1]
        count += 1
    end
end
p count
